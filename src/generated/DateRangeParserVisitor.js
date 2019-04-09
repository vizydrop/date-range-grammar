var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by DateRangeParser.

function DateRangeParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

DateRangeParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
DateRangeParserVisitor.prototype.constructor = DateRangeParserVisitor;

// Visit a parse tree produced by DateRangeParser#mainExpression.
DateRangeParserVisitor.prototype.visitMainExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#BasicDate.
DateRangeParserVisitor.prototype.visitBasicDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#CurrentInterval.
DateRangeParserVisitor.prototype.visitCurrentInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#LastNumericInterval.
DateRangeParserVisitor.prototype.visitLastNumericInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#PreviousInterval.
DateRangeParserVisitor.prototype.visitPreviousInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#PreviousNumericInterval.
DateRangeParserVisitor.prototype.visitPreviousNumericInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#Between.
DateRangeParserVisitor.prototype.visitBetween = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#From.
DateRangeParserVisitor.prototype.visitFrom = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#To.
DateRangeParserVisitor.prototype.visitTo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#FromTo.
DateRangeParserVisitor.prototype.visitFromTo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#Today.
DateRangeParserVisitor.prototype.visitToday = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#Yesterday.
DateRangeParserVisitor.prototype.visitYesterday = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#Date.
DateRangeParserVisitor.prototype.visitDate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#BasicDateBetween.
DateRangeParserVisitor.prototype.visitBasicDateBetween = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#IntervalAgo.
DateRangeParserVisitor.prototype.visitIntervalAgo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#NumericIntervalAgo.
DateRangeParserVisitor.prototype.visitNumericIntervalAgo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#CurrentIntervalAgo.
DateRangeParserVisitor.prototype.visitCurrentIntervalAgo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#PreviousIntervalAgo.
DateRangeParserVisitor.prototype.visitPreviousIntervalAgo = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#Interval.
DateRangeParserVisitor.prototype.visitInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#NumericInterval.
DateRangeParserVisitor.prototype.visitNumericInterval = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#CurrentIntervalCommon.
DateRangeParserVisitor.prototype.visitCurrentIntervalCommon = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by DateRangeParser#PreviousIntervalCommon.
DateRangeParserVisitor.prototype.visitPreviousIntervalCommon = function(ctx) {
  return this.visitChildren(ctx);
};



exports.DateRangeParserVisitor = DateRangeParserVisitor;
