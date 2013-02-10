describe("For loop test", function() {
    
    arr = [];
    for (var i = 1 ; i <= 20000000; i++){
        arr.push(1);
    }
    var currentTest;
    
    var startTime;
    var endTime;
    beforeEach(function() {
        startTime = Date.now();
    });
    
    afterEach(function() {
        endTime = Date.now();
        console.log(currentTest + ': ' + (endTime - startTime) + 'ms')
    });

    it('Just Arrays: init should be complete', function() {
        currentTest = this.description;
        expect(arr.length).toBe(20000000);
    });
    
    it('Just Arrays: Basic for loop', function() {
        currentTest = this.description;
        for (var i=0; i<arr.length; i++) {
        }
    });
    
    it('Just Arrays: For loop, but caching the length', function() {
        currentTest = this.description;
        for (var i=0, len=arr.length; i<len; i++) {
        }
    });
    
    it('Just Arrays: While loop that imitates a for loop', function() {
        currentTest = this.description;
        var i = 0;
        while (i<arr.length) {
            i++;
        }
    });

    it('Just Arrays: While loop that imitates a for loop, caching the length', function() {
        currentTest = this.description;
        var i=0, len=arr.length;
        while (i<len) {
            i++;
        }
    });
    
    it('Just Arrays: While loop in reverse, simplifying the test condition', function() {
        currentTest = this.description;
        var i = arr.length; 
        while (i--) {
        }
    });
    
    it('Just Arrays: While looping by popping values (this fails on sparse arrays)', function() {
        currentTest = this.description;
        var i;
        while (i = arr.pop()) {
        }
    });
    
    it('Just Arrays: For loop, testing on existence rather than length (this fails on sparse arrays)', function() {
        currentTest = this.description;
        for (var i=0; arr[i]; i++) {
        }
    });

    it('Just Arrays: For loop, testing on existence rather than length, array lookup is combined with test', function() {
        currentTest = this.description;
        for (var i=0, x; x = arr[i++];) {
        }
    });
    
    it('Just Arrays: For reference', function() {
        currentTest = this.description;
        for (var i=0, len=arr.length; i<len; i++) {
        }
    });

    it('Just Arrays: Array.forEach() native implementation', function() {
        currentTest = this.description;
        arr.forEach(function(x){
        });
    });
    
    it('Just Arrays: Angular.forEach() implementation', function() {
        currentTest = this.description;
        angular.forEach(arr, function(x){
        });
    });
    
    it('Just Arrays: jQuery.forEach() implementation', function() {
        currentTest = this.description;
        jQuery.each(arr, function(i, val) {
        });
    });

});
