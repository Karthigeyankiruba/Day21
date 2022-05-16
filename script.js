var i = 10;

setTimeout(function () {
    document.getElementById('text').innerHTML = i;
    setTimeout(function () {
        i--;
        document.getElementById('text').innerHTML = i;
        setTimeout(function () {
            i--;
            document.getElementById('text').innerHTML = i;
            setTimeout(function () {
                i--;
                document.getElementById('text').innerHTML = i;
                setTimeout(function () {
                    i--;
                    document.getElementById('text').innerHTML = i;
                    setTimeout(function () {
                        i--;
                        document.getElementById('text').innerHTML = i;
                        setTimeout(function () {
                            i--;
                            document.getElementById('text').innerHTML = i;
                            setTimeout(function () {
                                i--;
                                document.getElementById('text').innerHTML = i;
                                setTimeout(function () {
                                    i--;
                                    document.getElementById('text').innerHTML = i;
                                    setTimeout(function () {
                                        i--;
                                        document.getElementById('text').innerHTML = i;
                                        setTimeout(function () {
                                            i--;
                                            document.getElementById('text').innerHTML = "Happy Independence Day";
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)

        }, 1000)
    }, 1000)
}, 1000)