export default {
  component: require('./components/AppView'),
  childRoutes: [
    {
        path: '/',
        getComponent: (location, cb) => {
            return require.ensure([], (require) => {
              cb(null, require('./views/About'));
            });
        } 
    },
    { 
        path: 'about', 
        // component: About,
        getComponent: (location, cb) => {
            debugger;
            return require.ensure([], (require) => {
              cb(null, require('./views/About'));
            });
        },
        onEnter: onEnter,
        onLeave: onLeave
    },
    { 
        path: 'inbox', 
        // component: Inbox,
        getComponent: (location, cb) => {
            return require.ensure([], (require) => {
              cb(null, require('./views/Inbox'));
            });
        },
        onEnter: onEnter,
        onLeave: onLeave
    },
    { 
        path: 'message/:id', 
        // component: Message,
        getComponent: (location, cb) => {
            return require.ensure([], (require) => {
              cb(null, require('./views/Message'));
            });
        },
        onEnter: onEnter,
        onLeave: onLeave 
    }
  ]
}