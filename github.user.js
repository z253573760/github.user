(function() {
    var url_has = function(str) {
        return location.href.indexOf(str) >= 0;
    }
    var $ = function(selector) {
        return document.querySelectorAll(selector);
    };
    var replace_dom = function(selector, num, attr, old_string, new_string) {
        var selector_str = selector;
        if (typeof selector == 'string') {
            selector = $(selector);
        }
        var rep = function(str) {
            str = str || '';
            if (typeof new_string == 'undefined') {
                for (var j in old_string) {
                    str = str.replace(old_string[j][0], old_string[j][1]);
                }
            } else {
                str = str.replace(old_string, new_string);
            }
            return str;
        }
        if (num === 'each') {
            for (var i in selector) {
                selector[i][attr] = rep(selector[i][attr]);
            }
        } else if (selector.length && (num in selector) && (attr in selector[num])) {
            selector[num][attr] = rep(selector[num][attr]);
        }
        if (typeof selector_str == 'string') {
            setTimeout(function() {
                replace_dom(selector_str, num, attr, old_string, new_string);
            }, 1000);
        }
    };
    if (!url_has('github.com')) {
        return;
    }
    // 搜索框
    replace_dom($('.header-search-input'), 0, 'placeholder', 'Search GitHub', '全站搜索');
    // 翻译导航 Pull requests, Issues, Gist
    replace_dom($('.header-nav a'), 2, 'innerHTML', 'Gist', '重点');
    // 首页的两个大按钮
    replace_dom($('.shelf-cta'), 0, 'innerHTML', 'Read the guide', '阅读指南');
    replace_dom($('.shelf-cta'), 1, 'innerHTML', 'Start a project', '开始一个项目');
    // 首页我贡献的
    replace_dom($('[role=navigation] h3'), 0, 'innerHTML', 'Repositories you contribute to', '你有贡献的库');
    // 首页我的仓库
    replace_dom($('#your_repos'), 0, 'innerHTML', 'Your repositories', '你的仓库');
    replace_dom($('#your_repos a'), 0, 'innerHTML', 'New repository', '新建仓库');
    replace_dom($('.repo-filter'), 0, 'innerHTML', 'All', '全部');
    replace_dom($('.repo-filter'), 1, 'innerHTML', 'Public', '公开');
    replace_dom($('.repo-filter'), 2, 'innerHTML', 'Private', '私有');
    replace_dom($('.repo-filter'), 3, 'innerHTML', 'Sources', '创建的');
    replace_dom($('.repo-filter'), 4, 'innerHTML', 'Forks', '克隆的');
    replace_dom($('#your-repos-filter'), 0, 'placeholder', 'Find a repository', '搜索仓库');
    // document.querySelector('.file-navigation i').innerHTML = '分支:';
    // 翻译提交时间
    replace_dom('relative-time,time-ago', 'each', 'innerHTML', [
        ['minutes ago', '分钟前'],
        ['an hour ago', '1小时前'],
        ['hours ago', '小时前'],
        ['a day ago', '一天前'],
        ['days ago', '天前'],
        ['a month ago', '1个月前'],
        ['months ago', '个月前'],
        [/^on\s(\d+)\sJan/, '1月$1号'],
        [/^on\s(\d+)\sFeb/, '2月$1号'],
        [/^on\s(\d+)\sMar/, '3月$1号'],
        [/^on\s(\d+)\sApr/, '4月$1号'],
        [/^on\s(\d+)\sMay/, '5月$1号'],
        [/^on\s(\d+)\sJun/, '6月$1号'],
        [/^on\s(\d+)\sJul/, '7月$1号'],
        [/^on\s(\d+)\sAug/, '8月$1号'],
        [/^on\s(\d+)\sSep/, '9月$1号'],
        [/^on\s(\d+)\sOct/, '10月$1号'],
        [/^on\s(\d+)\sNov/, '11月$1号'],
        [/^on\s(\d+)\sDec/, '12月$1号']
    ]);
    // 翻译提交时间
    replace_dom($('.commit-group-title'), 'each', 'innerHTML', [
        ['Commits on', '提交时间: '],
        [/Jan\s(\d+)\,\s(\d+)/, '$2年1月$1号'],
        [/Feb\s(\d+)\,\s(\d+)/, '$2年2月$1号'],
        [/Mar\s(\d+)\,\s(\d+)/, '$2年3月$1号'],
        [/Apr\s(\d+)\,\s(\d+)/, '$2年4月$1号'],
        [/May\s(\d+)\,\s(\d+)/, '$2年5月$1号'],
        [/Jun\s(\d+)\,\s(\d+)/, '$2年6月$1号'],
        [/Jul\s(\d+)\,\s(\d+)/, '$2年7月$1号'],
        [/Aug\s(\d+)\,\s(\d+)/, '$2年8月$1号'],
        [/Sep\s(\d+)\,\s(\d+)/, '$2年9月$1号'],
        [/Oct\s(\d+)\,\s(\d+)/, '$2年10月$1号'],
        [/Nov\s(\d+)\,\s(\d+)/, '$2年11月$1号'],
        [/Dec\s(\d+)\,\s(\d+)/, '$2年12月$1号']
    ]);
    // 创建新仓库页面
    replace_dom($('.subhead-heading'), 0, 'innerHTML', 'Create a new repository', '创建一个新的存储库');
    replace_dom($('.subhead-description'), 0, 'innerHTML', 'A repository contains all the files for your project, including the revision history.', '一个存储库包含您的项目的所有文件，包括修改历史记录。');
    replace_dom($('.owner-reponame label'), 0, 'innerHTML', 'Owner', '所有者');
    replace_dom($('.owner-reponame label'), 1, 'innerHTML', 'Repository name', '仓库名称');
    replace_dom($('.with-permission-fields .my-3'), 0, 'innerHTML', 'Great repository names are short and memorable. Need inspiration? How about', '一个存储库包含您的项目的所有文件，包括修改历史记录。');
    replace_dom($('.select-menu-title'), 0, 'innerHTML', 'Choose another owner', '选择其他所有者');
    replace_dom($('[for=repository_description]'), 0, 'innerHTML', 'Description', '描述');
    // replace_dom($('.with-permission-fields .form-checkbox label :nth-child(3)'), 0, 'textContent', 'Public', '公开');
    replace_dom($('.with-permission-fields .form-checkbox .note'), 0, 'innerHTML', 'Anyone can see this repository. You choose who can commit.', '公开: 任何人都可以看到这个库。你可以选择谁能提交。');
    // replace_dom($('.with-permission-fields .form-checkbox label :nth-child(3)'), 0, 'textContent', 'Private', '私有');
    replace_dom($('.with-permission-fields .form-checkbox .note'), 1, 'innerHTML', 'You choose who can see and commit to this repository.', '私有: 您选择谁可以看到并提交到这个存储库。');
    // 版本库首页
    replace_dom($('.header-search-scope'), 0, 'innerHTML', [
        ['This repository', '搜索当前仓库'],
        ['This organization', '搜索当前组织']
    ]);
    replace_dom($('.numbers-summary li:nth-child(1) a'), 0, 'innerHTML', 'commits', '次提交');
    replace_dom($('.numbers-summary li:nth-child(2) a'), 0, 'innerHTML', 'branch', '个分支');
    replace_dom($('.numbers-summary li:nth-child(3) a'), 0, 'innerHTML', 'releases', '个版本');
    replace_dom($('.numbers-summary li:nth-child(4) a'), 0, 'innerHTML', 'contributors', '个贡献者');
    replace_dom('#context-commitish-filter-field', 0, 'placeholder', [
        ['Filter branches/tags', '搜索分支标签'],
        ['Find a tag', '搜索标签']
    ]);
    replace_dom($('h3'), 'each', 'innerHTML', [
        ['Watched repositories', '监控的版本库'],
    ]);
    replace_dom($('button,a,span,i'), 'each', 'innerHTML', [
        ['New pull request', '新拉取请求'],
        [' Projects', ' 项目'],
        [' Pulse', ' 脉冲'],
        [' branch', ' 分支'],
        ['Graphs', '图表'],
        ['Settings', '设置'],
        ['Pull requests', '拉取请求'],
        ['Change notification settings', '更改通知设置'],
        ['Unread', '未读'],
        ['Unwatch all', '取消全部监控'],
        ['Unwatch', '取消监控'],
        ['Not watching', '不监控'],
        ['Participating', '参与'],
        ['Mark all as read', '标记全部为已读'],
        ['All notifications', '所有通知'],
        ['Notifications', '通知'],
        ['Watching', '监控'],
        ['Learn more', '加载更多'],
        ['New repository', '新建仓库'],
        ['New team', '新建团队'],
        ['My teams', '我的团队'],
        ['Repositories', '仓库'],
        ['People', '成员'],
        ['Teams', '团队'],
        ['Use SSH', '使用SSH协议'],
        ['Use HTTPS', '使用HTTPS协议'],
        ['Create new file', '创建新文件'],
        ['Upload files', '上传文件'],
        ['Find file', '搜索文件'],
        ['Issues', '问题'],
        ['Code', '代码'],
        ['Wiki', '维基'],
        ['Contact GitHub', '联系GitHub'],
        ['Training', '培养'],
        ['Blog', '博客'],
        ['Shop', '商店'],
        ['About', '关于'],
        ['Labels', '标签'],
        ['Milestones', '里程碑'],
        ['Filters', '搜索'],
        ['Clone or download', '克隆或下载'],
        ['Branches', '分支'],
        ['Branch:', '分支:'],
        ['Tags', '标签'],
        ['Download ZIP', '下载ZIP压缩包'],
        ['Switch branches/tags', '切换分支或标签']
    ]);
})();