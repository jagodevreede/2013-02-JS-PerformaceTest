describe("For loop test", function() {
    
    var arr = [];
    var resultShouldBe = 20000000;
    var currentTest;
    
    var startTime;
    var endTime;
    beforeEach(function() {
        arr = [];
        for (var i = 1 ; i <= 20000000; i++){
            arr.push(1);
        }
        startTime = Date.now();
    });
    
    afterEach(function() {
        endTime = Date.now();
        console.log(currentTest + ': ' + (endTime - startTime) + 'ms')
    });

    it('With Calculation: init should be complete', function() {
        currentTest = this.description;
        expect(arr.length).toBe(20000000);
    });
    
    it('With Calculation: Basic for loop', function() {
        currentTest = this.description;
        var result = 0;
        for (var i=0; i<arr.length; i++) {
            result += arr[i];
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: For loop, but caching the length', function() {
        currentTest = this.description;
        var result = 0;
        for (var i=0, len=arr.length; i<len; i++) {
            result += arr[i];
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: While loop that imitates a for loop', function() {
        currentTest = this.description;
        var result = 0;
        var i = 0;
        while (i<arr.length) {
            result += arr[i];
            i++;
        }
        expect(result).toBe(resultShouldBe);
    });

    it('With Calculation: While loop that imitates a for loop, caching the length', function() {
        currentTest = this.description;
        var result = 0;
        var i=0, len=arr.length;
        while (i<len) {
            result += arr[i];
            i++;
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: While loop in reverse, simplifying the test condition', function() {
        currentTest = this.description;
        var result = 0;
        var i = arr.length; 
        while (i--) {
            result += arr[i];
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: While looping by popping values (this fails on sparse arrays)', function() {
        currentTest = this.description;
        var result = 0;
        var i;
        while (i = arr.pop()) {
            result += i;
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: For loop, testing on existence rather than length (this fails on sparse arrays)', function() {
        currentTest = this.description;
        var result = 0;
        for (var i=0; arr[i]; i++) {
            result += arr[i];
        }
        expect(result).toBe(resultShouldBe);
    });

    it('With Calculation: For loop, testing on existence rather than length, array lookup is combined with test', function() {
        currentTest = this.description;
        var result = 0;
        for (var i=0, x; x = arr[i++];) {
            result += x;
        }
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: For reference', function() {
        currentTest = this.description;
        var result = 0;
        for (var i=0, len=arr.length; i<len; i++) {
            result += arr[i];
        }
        expect(result).toBe(resultShouldBe);
    });

    it('With Calculation: Array.forEach() native implementation', function() {
        currentTest = this.description;
        var result = 0;
        arr.forEach(function(x){
            result += x;
        });
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: Angular.forEach() implementation', function() {
        currentTest = this.description;
        var result = 0;
        angular.forEach(arr, function(x){
            result += x;
        });
        expect(result).toBe(resultShouldBe);
    });
    
    it('With Calculation: jQuery.forEach() implementation', function() {
        currentTest = this.description;
        var result = 0;
        jQuery.each(arr, function(i, val) {
            result += val;
        });
        expect(result).toBe(resultShouldBe);
    });

});
