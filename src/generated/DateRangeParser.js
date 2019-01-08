var antlr4 = require('antlr4/index');
var DateRangeParserListener = require('./DateRangeParserListener').DateRangeParserListener;
var DateRangeParserVisitor = require('./DateRangeParserVisitor').DateRangeParserVisitor;

var grammarFileName = "DateRangeParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b5\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003 ",
    "\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004%\n\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0005\u0005.\n\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0002\u0002\b\u0002\u0004\u0006\b\n\f",
    "\u0002\u0003\u0003\u0002\u0007\b\u00027\u0002\u000e\u0003\u0002\u0002",
    "\u0002\u0004\u001f\u0003\u0002\u0002\u0002\u0006$\u0003\u0002\u0002",
    "\u0002\b-\u0003\u0002\u0002\u0002\n/\u0003\u0002\u0002\u0002\f1\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0005\u0004\u0003\u0002\u000f\u0010\u0007",
    "\u0002\u0002\u0003\u0010\u0003\u0003\u0002\u0002\u0002\u0011 \u0005",
    "\u0006\u0004\u0002\u0012\u0013\t\u0002\u0002\u0002\u0013 \u0005\n\u0006",
    "\u0002\u0014\u0015\u0007\b\u0002\u0002\u0015 \u0005\f\u0007\u0002\u0016",
    "\u0017\u0007\t\u0002\u0002\u0017 \u0005\n\u0006\u0002\u0018\u0019\u0007",
    "\t\u0002\u0002\u0019 \u0005\f\u0007\u0002\u001a\u001b\u0007\n\u0002",
    "\u0002\u001b\u001c\u0005\b\u0005\u0002\u001c\u001d\u0007\u0005\u0002",
    "\u0002\u001d\u001e\u0005\b\u0005\u0002\u001e \u0003\u0002\u0002\u0002",
    "\u001f\u0011\u0003\u0002\u0002\u0002\u001f\u0012\u0003\u0002\u0002\u0002",
    "\u001f\u0014\u0003\u0002\u0002\u0002\u001f\u0016\u0003\u0002\u0002\u0002",
    "\u001f\u0018\u0003\u0002\u0002\u0002\u001f\u001a\u0003\u0002\u0002\u0002",
    " \u0005\u0003\u0002\u0002\u0002!%\u0007\u000b\u0002\u0002\"%\u0007\f",
    "\u0002\u0002#%\u0007\u0003\u0002\u0002$!\u0003\u0002\u0002\u0002$\"",
    "\u0003\u0002\u0002\u0002$#\u0003\u0002\u0002\u0002%\u0007\u0003\u0002",
    "\u0002\u0002&.\u0005\u0006\u0004\u0002\'(\u0005\n\u0006\u0002()\u0007",
    "\u0006\u0002\u0002).\u0003\u0002\u0002\u0002*+\u0005\f\u0007\u0002+",
    ",\u0007\u0006\u0002\u0002,.\u0003\u0002\u0002\u0002-&\u0003\u0002\u0002",
    "\u0002-\'\u0003\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002.\t\u0003",
    "\u0002\u0002\u0002/0\u0007\r\u0002\u00020\u000b\u0003\u0002\u0002\u0002",
    "12\u0007\u0004\u0002\u000223\u0007\u000e\u0002\u00023\r\u0003\u0002",
    "\u0002\u0002\u0005\u001f$-"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "DATE", "NUMBER", "AND", "AGO", "THIS", "LAST", 
                      "PREVIOUS", "BETWEEN", "TODAY", "YESTERDAY", "DATE_RANGE", 
                      "NUMERIC_DATE_RANGE", "WS", "NUMERIC", "WHITESPACES", 
                      "DAYS", "MONTHS", "WEEKS", "QUARTERS", "YEARS", "DAY", 
                      "MONTH", "WEEK", "QUARTER", "YEAR" ];

var ruleNames =  [ "mainExpression", "expr", "basicDateExpr", "betweenArgExpr", 
                   "intervalExpr", "numericIntervalExpr" ];

function DateRangeParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

DateRangeParser.prototype = Object.create(antlr4.Parser.prototype);
DateRangeParser.prototype.constructor = DateRangeParser;

Object.defineProperty(DateRangeParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

DateRangeParser.EOF = antlr4.Token.EOF;
DateRangeParser.DATE = 1;
DateRangeParser.NUMBER = 2;
DateRangeParser.AND = 3;
DateRangeParser.AGO = 4;
DateRangeParser.THIS = 5;
DateRangeParser.LAST = 6;
DateRangeParser.PREVIOUS = 7;
DateRangeParser.BETWEEN = 8;
DateRangeParser.TODAY = 9;
DateRangeParser.YESTERDAY = 10;
DateRangeParser.DATE_RANGE = 11;
DateRangeParser.NUMERIC_DATE_RANGE = 12;
DateRangeParser.WS = 13;
DateRangeParser.NUMERIC = 14;
DateRangeParser.WHITESPACES = 15;
DateRangeParser.DAYS = 16;
DateRangeParser.MONTHS = 17;
DateRangeParser.WEEKS = 18;
DateRangeParser.QUARTERS = 19;
DateRangeParser.YEARS = 20;
DateRangeParser.DAY = 21;
DateRangeParser.MONTH = 22;
DateRangeParser.WEEK = 23;
DateRangeParser.QUARTER = 24;
DateRangeParser.YEAR = 25;

DateRangeParser.RULE_mainExpression = 0;
DateRangeParser.RULE_expr = 1;
DateRangeParser.RULE_basicDateExpr = 2;
DateRangeParser.RULE_betweenArgExpr = 3;
DateRangeParser.RULE_intervalExpr = 4;
DateRangeParser.RULE_numericIntervalExpr = 5;

function MainExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_mainExpression;
    return this;
}

MainExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MainExpressionContext.prototype.constructor = MainExpressionContext;

MainExpressionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

MainExpressionContext.prototype.EOF = function() {
    return this.getToken(DateRangeParser.EOF, 0);
};

MainExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterMainExpression(this);
	}
};

MainExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitMainExpression(this);
	}
};

MainExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitMainExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




DateRangeParser.MainExpressionContext = MainExpressionContext;

DateRangeParser.prototype.mainExpression = function() {

    var localctx = new MainExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, DateRangeParser.RULE_mainExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.expr();
        this.state = 13;
        this.match(DateRangeParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PreviousNumericIntervalContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.interval = null; // NumericIntervalExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreviousNumericIntervalContext.prototype = Object.create(ExprContext.prototype);
PreviousNumericIntervalContext.prototype.constructor = PreviousNumericIntervalContext;

DateRangeParser.PreviousNumericIntervalContext = PreviousNumericIntervalContext;

PreviousNumericIntervalContext.prototype.PREVIOUS = function() {
    return this.getToken(DateRangeParser.PREVIOUS, 0);
};

PreviousNumericIntervalContext.prototype.numericIntervalExpr = function() {
    return this.getTypedRuleContext(NumericIntervalExprContext,0);
};
PreviousNumericIntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterPreviousNumericInterval(this);
	}
};

PreviousNumericIntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitPreviousNumericInterval(this);
	}
};

PreviousNumericIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitPreviousNumericInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PreviousIntervalContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.interval = null; // IntervalExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PreviousIntervalContext.prototype = Object.create(ExprContext.prototype);
PreviousIntervalContext.prototype.constructor = PreviousIntervalContext;

DateRangeParser.PreviousIntervalContext = PreviousIntervalContext;

PreviousIntervalContext.prototype.PREVIOUS = function() {
    return this.getToken(DateRangeParser.PREVIOUS, 0);
};

PreviousIntervalContext.prototype.intervalExpr = function() {
    return this.getTypedRuleContext(IntervalExprContext,0);
};
PreviousIntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterPreviousInterval(this);
	}
};

PreviousIntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitPreviousInterval(this);
	}
};

PreviousIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitPreviousInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BetweenContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.min = null; // BetweenArgExprContext;
    this.max = null; // BetweenArgExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BetweenContext.prototype = Object.create(ExprContext.prototype);
BetweenContext.prototype.constructor = BetweenContext;

DateRangeParser.BetweenContext = BetweenContext;

BetweenContext.prototype.BETWEEN = function() {
    return this.getToken(DateRangeParser.BETWEEN, 0);
};

BetweenContext.prototype.AND = function() {
    return this.getToken(DateRangeParser.AND, 0);
};

BetweenContext.prototype.betweenArgExpr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BetweenArgExprContext);
    } else {
        return this.getTypedRuleContext(BetweenArgExprContext,i);
    }
};
BetweenContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterBetween(this);
	}
};

BetweenContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitBetween(this);
	}
};

BetweenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitBetween(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CurrentIntervalContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.interval = null; // IntervalExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CurrentIntervalContext.prototype = Object.create(ExprContext.prototype);
CurrentIntervalContext.prototype.constructor = CurrentIntervalContext;

DateRangeParser.CurrentIntervalContext = CurrentIntervalContext;

CurrentIntervalContext.prototype.THIS = function() {
    return this.getToken(DateRangeParser.THIS, 0);
};

CurrentIntervalContext.prototype.LAST = function() {
    return this.getToken(DateRangeParser.LAST, 0);
};

CurrentIntervalContext.prototype.intervalExpr = function() {
    return this.getTypedRuleContext(IntervalExprContext,0);
};
CurrentIntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterCurrentInterval(this);
	}
};

CurrentIntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitCurrentInterval(this);
	}
};

CurrentIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitCurrentInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LastNumericIntervalContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.interval = null; // NumericIntervalExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LastNumericIntervalContext.prototype = Object.create(ExprContext.prototype);
LastNumericIntervalContext.prototype.constructor = LastNumericIntervalContext;

DateRangeParser.LastNumericIntervalContext = LastNumericIntervalContext;

LastNumericIntervalContext.prototype.LAST = function() {
    return this.getToken(DateRangeParser.LAST, 0);
};

LastNumericIntervalContext.prototype.numericIntervalExpr = function() {
    return this.getTypedRuleContext(NumericIntervalExprContext,0);
};
LastNumericIntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterLastNumericInterval(this);
	}
};

LastNumericIntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitLastNumericInterval(this);
	}
};

LastNumericIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitLastNumericInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BasicDateContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.date = null; // BasicDateExprContext;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BasicDateContext.prototype = Object.create(ExprContext.prototype);
BasicDateContext.prototype.constructor = BasicDateContext;

DateRangeParser.BasicDateContext = BasicDateContext;

BasicDateContext.prototype.basicDateExpr = function() {
    return this.getTypedRuleContext(BasicDateExprContext,0);
};
BasicDateContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterBasicDate(this);
	}
};

BasicDateContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitBasicDate(this);
	}
};

BasicDateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitBasicDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DateRangeParser.ExprContext = ExprContext;

DateRangeParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, DateRangeParser.RULE_expr);
    var _la = 0; // Token type
    try {
        this.state = 29;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        switch(la_) {
        case 1:
            localctx = new BasicDateContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 15;
            localctx.date = this.basicDateExpr();
            break;

        case 2:
            localctx = new CurrentIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 16;
            _la = this._input.LA(1);
            if(!(_la===DateRangeParser.THIS || _la===DateRangeParser.LAST)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 17;
            localctx.interval = this.intervalExpr();
            break;

        case 3:
            localctx = new LastNumericIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 18;
            this.match(DateRangeParser.LAST);
            this.state = 19;
            localctx.interval = this.numericIntervalExpr();
            break;

        case 4:
            localctx = new PreviousIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 20;
            this.match(DateRangeParser.PREVIOUS);
            this.state = 21;
            localctx.interval = this.intervalExpr();
            break;

        case 5:
            localctx = new PreviousNumericIntervalContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 22;
            this.match(DateRangeParser.PREVIOUS);
            this.state = 23;
            localctx.interval = this.numericIntervalExpr();
            break;

        case 6:
            localctx = new BetweenContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 24;
            this.match(DateRangeParser.BETWEEN);
            this.state = 25;
            localctx.min = this.betweenArgExpr();
            this.state = 26;
            this.match(DateRangeParser.AND);
            this.state = 27;
            localctx.max = this.betweenArgExpr();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BasicDateExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_basicDateExpr;
    return this;
}

BasicDateExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BasicDateExprContext.prototype.constructor = BasicDateExprContext;


 
BasicDateExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function TodayContext(parser, ctx) {
	BasicDateExprContext.call(this, parser);
    BasicDateExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TodayContext.prototype = Object.create(BasicDateExprContext.prototype);
TodayContext.prototype.constructor = TodayContext;

DateRangeParser.TodayContext = TodayContext;

TodayContext.prototype.TODAY = function() {
    return this.getToken(DateRangeParser.TODAY, 0);
};
TodayContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterToday(this);
	}
};

TodayContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitToday(this);
	}
};

TodayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitToday(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function YesterdayContext(parser, ctx) {
	BasicDateExprContext.call(this, parser);
    BasicDateExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

YesterdayContext.prototype = Object.create(BasicDateExprContext.prototype);
YesterdayContext.prototype.constructor = YesterdayContext;

DateRangeParser.YesterdayContext = YesterdayContext;

YesterdayContext.prototype.YESTERDAY = function() {
    return this.getToken(DateRangeParser.YESTERDAY, 0);
};
YesterdayContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterYesterday(this);
	}
};

YesterdayContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitYesterday(this);
	}
};

YesterdayContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitYesterday(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DateContext(parser, ctx) {
	BasicDateExprContext.call(this, parser);
    this.date = null; // Token;
    BasicDateExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DateContext.prototype = Object.create(BasicDateExprContext.prototype);
DateContext.prototype.constructor = DateContext;

DateRangeParser.DateContext = DateContext;

DateContext.prototype.DATE = function() {
    return this.getToken(DateRangeParser.DATE, 0);
};
DateContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterDate(this);
	}
};

DateContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitDate(this);
	}
};

DateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitDate(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DateRangeParser.BasicDateExprContext = BasicDateExprContext;

DateRangeParser.prototype.basicDateExpr = function() {

    var localctx = new BasicDateExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, DateRangeParser.RULE_basicDateExpr);
    try {
        this.state = 34;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DateRangeParser.TODAY:
            localctx = new TodayContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 31;
            this.match(DateRangeParser.TODAY);
            break;
        case DateRangeParser.YESTERDAY:
            localctx = new YesterdayContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 32;
            this.match(DateRangeParser.YESTERDAY);
            break;
        case DateRangeParser.DATE:
            localctx = new DateContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 33;
            localctx.date = this.match(DateRangeParser.DATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BetweenArgExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_betweenArgExpr;
    return this;
}

BetweenArgExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BetweenArgExprContext.prototype.constructor = BetweenArgExprContext;


 
BetweenArgExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function BasicDateBetweenContext(parser, ctx) {
	BetweenArgExprContext.call(this, parser);
    this.date = null; // BasicDateExprContext;
    BetweenArgExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BasicDateBetweenContext.prototype = Object.create(BetweenArgExprContext.prototype);
BasicDateBetweenContext.prototype.constructor = BasicDateBetweenContext;

DateRangeParser.BasicDateBetweenContext = BasicDateBetweenContext;

BasicDateBetweenContext.prototype.basicDateExpr = function() {
    return this.getTypedRuleContext(BasicDateExprContext,0);
};
BasicDateBetweenContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterBasicDateBetween(this);
	}
};

BasicDateBetweenContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitBasicDateBetween(this);
	}
};

BasicDateBetweenContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitBasicDateBetween(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NumericIntervalAgoContext(parser, ctx) {
	BetweenArgExprContext.call(this, parser);
    this.interval = null; // NumericIntervalExprContext;
    BetweenArgExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericIntervalAgoContext.prototype = Object.create(BetweenArgExprContext.prototype);
NumericIntervalAgoContext.prototype.constructor = NumericIntervalAgoContext;

DateRangeParser.NumericIntervalAgoContext = NumericIntervalAgoContext;

NumericIntervalAgoContext.prototype.AGO = function() {
    return this.getToken(DateRangeParser.AGO, 0);
};

NumericIntervalAgoContext.prototype.numericIntervalExpr = function() {
    return this.getTypedRuleContext(NumericIntervalExprContext,0);
};
NumericIntervalAgoContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterNumericIntervalAgo(this);
	}
};

NumericIntervalAgoContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitNumericIntervalAgo(this);
	}
};

NumericIntervalAgoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitNumericIntervalAgo(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IntervalAgoContext(parser, ctx) {
	BetweenArgExprContext.call(this, parser);
    this.interval = null; // IntervalExprContext;
    BetweenArgExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntervalAgoContext.prototype = Object.create(BetweenArgExprContext.prototype);
IntervalAgoContext.prototype.constructor = IntervalAgoContext;

DateRangeParser.IntervalAgoContext = IntervalAgoContext;

IntervalAgoContext.prototype.AGO = function() {
    return this.getToken(DateRangeParser.AGO, 0);
};

IntervalAgoContext.prototype.intervalExpr = function() {
    return this.getTypedRuleContext(IntervalExprContext,0);
};
IntervalAgoContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterIntervalAgo(this);
	}
};

IntervalAgoContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitIntervalAgo(this);
	}
};

IntervalAgoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitIntervalAgo(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DateRangeParser.BetweenArgExprContext = BetweenArgExprContext;

DateRangeParser.prototype.betweenArgExpr = function() {

    var localctx = new BetweenArgExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, DateRangeParser.RULE_betweenArgExpr);
    try {
        this.state = 43;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case DateRangeParser.DATE:
        case DateRangeParser.TODAY:
        case DateRangeParser.YESTERDAY:
            localctx = new BasicDateBetweenContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 36;
            localctx.date = this.basicDateExpr();
            break;
        case DateRangeParser.DATE_RANGE:
            localctx = new IntervalAgoContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 37;
            localctx.interval = this.intervalExpr();
            this.state = 38;
            this.match(DateRangeParser.AGO);
            break;
        case DateRangeParser.NUMBER:
            localctx = new NumericIntervalAgoContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            localctx.interval = this.numericIntervalExpr();
            this.state = 41;
            this.match(DateRangeParser.AGO);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IntervalExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_intervalExpr;
    return this;
}

IntervalExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IntervalExprContext.prototype.constructor = IntervalExprContext;


 
IntervalExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function IntervalContext(parser, ctx) {
	IntervalExprContext.call(this, parser);
    this.interval = null; // Token;
    IntervalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntervalContext.prototype = Object.create(IntervalExprContext.prototype);
IntervalContext.prototype.constructor = IntervalContext;

DateRangeParser.IntervalContext = IntervalContext;

IntervalContext.prototype.DATE_RANGE = function() {
    return this.getToken(DateRangeParser.DATE_RANGE, 0);
};
IntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterInterval(this);
	}
};

IntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitInterval(this);
	}
};

IntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DateRangeParser.IntervalExprContext = IntervalExprContext;

DateRangeParser.prototype.intervalExpr = function() {

    var localctx = new IntervalExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, DateRangeParser.RULE_intervalExpr);
    try {
        localctx = new IntervalContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 45;
        localctx.interval = this.match(DateRangeParser.DATE_RANGE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumericIntervalExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = DateRangeParser.RULE_numericIntervalExpr;
    return this;
}

NumericIntervalExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumericIntervalExprContext.prototype.constructor = NumericIntervalExprContext;


 
NumericIntervalExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function NumericIntervalContext(parser, ctx) {
	NumericIntervalExprContext.call(this, parser);
    this.num = null; // Token;
    this.interval = null; // Token;
    NumericIntervalExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NumericIntervalContext.prototype = Object.create(NumericIntervalExprContext.prototype);
NumericIntervalContext.prototype.constructor = NumericIntervalContext;

DateRangeParser.NumericIntervalContext = NumericIntervalContext;

NumericIntervalContext.prototype.NUMBER = function() {
    return this.getToken(DateRangeParser.NUMBER, 0);
};

NumericIntervalContext.prototype.NUMERIC_DATE_RANGE = function() {
    return this.getToken(DateRangeParser.NUMERIC_DATE_RANGE, 0);
};
NumericIntervalContext.prototype.enterRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.enterNumericInterval(this);
	}
};

NumericIntervalContext.prototype.exitRule = function(listener) {
    if(listener instanceof DateRangeParserListener ) {
        listener.exitNumericInterval(this);
	}
};

NumericIntervalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof DateRangeParserVisitor ) {
        return visitor.visitNumericInterval(this);
    } else {
        return visitor.visitChildren(this);
    }
};



DateRangeParser.NumericIntervalExprContext = NumericIntervalExprContext;

DateRangeParser.prototype.numericIntervalExpr = function() {

    var localctx = new NumericIntervalExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, DateRangeParser.RULE_numericIntervalExpr);
    try {
        localctx = new NumericIntervalContext(this, localctx);
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        localctx.num = this.match(DateRangeParser.NUMBER);
        this.state = 48;
        localctx.interval = this.match(DateRangeParser.NUMERIC_DATE_RANGE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.DateRangeParser = DateRangeParser;
