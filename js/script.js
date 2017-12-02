var ts = new TwoStep({
    elements: document.querySelectorAll('.parent .narrative-item'),
    onChange: function(event) {
        console.log('Item '+event.index);
    },
    stick: document.querySelector('.parent .sticky-outer'),
    narrative: [
        function(event) {
            $('.parent .chart').html('<video src="video/video4.mp4" autoplay="autoplay" loop="loop"></video>');
        },
        function(event) {
            $('.parent .chart').text('').attr("background-color", "white");
        }

    ],
    offset: {
        up: '-10%',
        down: '100%'
    }
});