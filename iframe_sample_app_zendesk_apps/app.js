(function() {
  return {
    events: {
      'app.activated':'init',
      'pane.activated': 'paneActivated'
    },

    init: function(data){//load content if app is at new_ticket_sidebar, ticket_sidebar and user_sidebar
      if (data.firstLoad && this.currentLocation() !== 'top_bar' && this.currentLocation() !== 'nav_bar') {
        this.resizeIframe({ width : '300px', height : '260px' }, { href : "https://support.zendesk.com" });
      }
    },

    paneActivated: function(data) {//load content if app is at top_bar and nav_bar
      if (data.firstLoad) {
        this.resizeIframe({ width : '1024px', height : '500px' }, { href : "http://developer.zendesk.com/documentation/apps/introduction.html" });
      }
    },

    resizeIframe: function(dimensions, page) {
      this.page = page;
      this.switchTo('iframePage', {
        dimension : dimensions,
        page : this.page
      });
    }
  };
}());
