// Generated by CoffeeScript 1.8.0
(function() {
  var $, QueryString, getCommands, markWrap, selectText, setupFromQueryString;

  QueryString = (function() {
    function QueryString(queryString) {
      var key, pair, value, _ref;
      this.queryString = queryString;
      this.queryString || (this.queryString = (_ref = window.document.location.search) != null ? _ref.substr(1) : void 0);
      this.variables = this.queryString.split('&');
      this.pairs = (function() {
        var _i, _len, _ref1, _ref2, _results;
        _ref1 = this.variables;
        _results = [];
        for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
          pair = _ref1[_i];
          _results.push((_ref2 = pair.split('='), key = _ref2[0], value = _ref2[1], _ref2));
        }
        return _results;
      }).call(this);
    }

    QueryString.prototype.get = function(name) {
      var key, value, _i, _len, _ref, _ref1;
      _ref = this.pairs;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        _ref1 = _ref[_i], key = _ref1[0], value = _ref1[1];
        if (key === name) {
          return value;
        }
      }
    };

    QueryString.fromKeys = function(keys) {
      var key, qs, value;
      qs = ((function() {
        var _results;
        _results = [];
        for (key in keys) {
          value = keys[key];
          _results.push("" + key + "=" + value);
        }
        return _results;
      })()).join("&");
      return "?" + qs;
    };

    return QueryString;

  })();

  $ = function(selector) {
    return document.querySelector(selector);
  };

  markWrap = function(value) {
    return "<mark>" + value + "</mark>";
  };

  selectText = function(element) {
    var doc, range, selection, src;
    doc = document;
    src = $(element);
    if (doc.body.createTextRange != null) {
      range = doc.body.createTextRange();
      range.moveToElementText(src);
      return range.select();
    } else if (window.getSelection != null) {
      selection = window.getSelection();
      range = doc.createRange();
      range.selectNodeContents(src);
      selection.removeAllRanges();
      return selection.addRange(range);
    }
  };

  setupFromQueryString = function() {
    var qs;
    qs = new QueryString();
    if (qs.pairs.length >= 5) {
      ($('#remote_folder')).value = qs.get("rf");
      ($('#local_folder')).value = qs.get("lf");
      ($('#github_user')).value = qs.get("u");
      ($('#repo_name')).value = qs.get("r");
      return ($('#branch_name')).value = qs.get("b");
    }
  };

  getCommands = function() {
    var branchName, commands, githubUser, keys, localFolder, remoteFolder, repoName;
    remoteFolder = ($('#remote_folder')).value;
    branchName = ($('#branch_name')).value;
    githubUser = ($('#github_user')).value;
    repoName = ($('#repo_name')).value;
    localFolder = ($('#local_folder')).value;
    commands = "git remote add -f " + (markWrap(repoName)) + " https://github.com/" + (markWrap(githubUser)) + "/" + (markWrap(repoName)) + ".git\ngit merge -s ours --no-commit --allow-unrelated-histories " + (markWrap(repoName)) + "/" + (markWrap(branchName)) + "\ngit read-tree --prefix=" + (markWrap(localFolder)) + " -u " + (markWrap(repoName)) + "/" + (markWrap(branchName)) + ":" + (markWrap(remoteFolder)) + "\n\ngit commit -m \"Subtree merged in " + (markWrap(localFolder)) + "\"";
    ($('#output')).innerHTML = "<samp>" + commands + "</samp>";
    keys = {
      rf: remoteFolder,
      u: githubUser,
      b: branchName,
      r: repoName,
      lf: localFolder
    };
    return ($('[rel="bookmark"]')).setAttribute("href", QueryString.fromKeys(keys));
  };

  document.body.addEventListener("keyup", getCommands, true);

  ($('#output')).addEventListener("click", function(event) {
    return selectText('#output');
  }, true);

  setupFromQueryString();

  getCommands();

}).call(this);
