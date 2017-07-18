app.register({
    home: {
        registerTemplates: function() {
            app.core.ui.addTemplate('app', 'navbar', 'js/home/views/navbar.html');
            app.core.ui.addTemplate('content', 'home', 'js/home/views/home.html');
        },
        initEvents: function() {

        }
    },
    ctrl: {
        homeAction: function() {
            app.core.ctrl.go('home',{}).then(function() {
                app.core.history.add(app.ctrl.states.home);
            });
        }
    }
});
