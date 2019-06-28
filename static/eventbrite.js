   <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"></script>

   <script type="text/javascript">
       var exampleCallback = function() {
           console.log('Order complete!');
       };

       window.EBWidgets.createWidget({
           // Required
           widgetType: 'checkout',
           eventId: '64003008722',
           iframeContainerId: 'eventbrite-widget-container-64003008722',

           // Optional
           iframeContainerHeight: 425,  // Widget height in pixels. Defaults to a minimum of 425px if not provided
           onOrderComplete: exampleCallback  // Method called when an order has successfully completed
       });
   </script>
