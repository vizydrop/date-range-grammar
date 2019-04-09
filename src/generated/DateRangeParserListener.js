var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by DateRangeParser.
function DateRangeParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

DateRangeParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
DateRangeParserListener.prototype.constructor = DateRangeParserListener;

// Enter a parse tree produced by DateRangeParser#mainExpression.
DateRangeParserListener.prototype.enterMainExpression = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#mainExpression.
DateRangeParserListener.prototype.exitMainExpression = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#BasicDate.
DateRangeParserListener.prototype.enterBasicDate = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#BasicDate.
DateRangeParserListener.prototype.exitBasicDate = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#CurrentInterval.
DateRangeParserListener.prototype.enterCurrentInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#CurrentInterval.
DateRangeParserListener.prototype.exitCurrentInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#LastNumericInterval.
DateRangeParserListener.prototype.enterLastNumericInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#LastNumericInterval.
DateRangeParserListener.prototype.exitLastNumericInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#PreviousInterval.
DateRangeParserListener.prototype.enterPreviousInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#PreviousInterval.
DateRangeParserListener.prototype.exitPreviousInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#PreviousNumericInterval.
DateRangeParserListener.prototype.enterPreviousNumericInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#PreviousNumericInterval.
DateRangeParserListener.prototype.exitPreviousNumericInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#Between.
DateRangeParserListener.prototype.enterBetween = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#Between.
DateRangeParserListener.prototype.exitBetween = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#From.
DateRangeParserListener.prototype.enterFrom = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#From.
DateRangeParserListener.prototype.exitFrom = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#To.
DateRangeParserListener.prototype.enterTo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#To.
DateRangeParserListener.prototype.exitTo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#FromTo.
DateRangeParserListener.prototype.enterFromTo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#FromTo.
DateRangeParserListener.prototype.exitFromTo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#Today.
DateRangeParserListener.prototype.enterToday = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#Today.
DateRangeParserListener.prototype.exitToday = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#Yesterday.
DateRangeParserListener.prototype.enterYesterday = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#Yesterday.
DateRangeParserListener.prototype.exitYesterday = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#Date.
DateRangeParserListener.prototype.enterDate = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#Date.
DateRangeParserListener.prototype.exitDate = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#BasicDateBetween.
DateRangeParserListener.prototype.enterBasicDateBetween = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#BasicDateBetween.
DateRangeParserListener.prototype.exitBasicDateBetween = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#IntervalAgo.
DateRangeParserListener.prototype.enterIntervalAgo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#IntervalAgo.
DateRangeParserListener.prototype.exitIntervalAgo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#NumericIntervalAgo.
DateRangeParserListener.prototype.enterNumericIntervalAgo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#NumericIntervalAgo.
DateRangeParserListener.prototype.exitNumericIntervalAgo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#CurrentIntervalAgo.
DateRangeParserListener.prototype.enterCurrentIntervalAgo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#CurrentIntervalAgo.
DateRangeParserListener.prototype.exitCurrentIntervalAgo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#PreviousIntervalAgo.
DateRangeParserListener.prototype.enterPreviousIntervalAgo = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#PreviousIntervalAgo.
DateRangeParserListener.prototype.exitPreviousIntervalAgo = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#Interval.
DateRangeParserListener.prototype.enterInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#Interval.
DateRangeParserListener.prototype.exitInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#NumericInterval.
DateRangeParserListener.prototype.enterNumericInterval = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#NumericInterval.
DateRangeParserListener.prototype.exitNumericInterval = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#CurrentIntervalCommon.
DateRangeParserListener.prototype.enterCurrentIntervalCommon = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#CurrentIntervalCommon.
DateRangeParserListener.prototype.exitCurrentIntervalCommon = function(ctx) {
};


// Enter a parse tree produced by DateRangeParser#PreviousIntervalCommon.
DateRangeParserListener.prototype.enterPreviousIntervalCommon = function(ctx) {
};

// Exit a parse tree produced by DateRangeParser#PreviousIntervalCommon.
DateRangeParserListener.prototype.exitPreviousIntervalCommon = function(ctx) {
};



exports.DateRangeParserListener = DateRangeParserListener;
