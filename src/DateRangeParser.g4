parser grammar DateRangeParser;
options {tokenVocab = DateRangeLexer;}

mainExpression : expr EOF;

expr :
  date=basicDateExpr # BasicDate
  | interval=currentIntervalExpr # CurrentInterval
  | LAST interval=numericIntervalExpr # LastNumericInterval
  | interval=previousIntervalExpr # PreviousInterval
  | PREVIOUS interval=numericIntervalExpr # PreviousNumericInterval
  | BETWEEN min=betweenArgExpr AND max=betweenArgExpr # Between
  | FROM date=basicDateExpr # From
  | TO date=basicDateExpr # To
  | FROM dateFrom=basicDateExpr TO dateTo=basicDateExpr # FromTo
  ;

basicDateExpr :
  TODAY # Today
  | YESTERDAY # Yesterday
  | date=DATE # Date
  ;

betweenArgExpr :
  date=basicDateExpr # BasicDateBetween
  | interval=intervalExpr AGO # IntervalAgo
  | interval=numericIntervalExpr AGO # NumericIntervalAgo
  | interval=currentIntervalExpr # CurrentIntervalAgo
  | interval=previousIntervalExpr # PreviousIntervalAgo
  ;

intervalExpr : interval=DATE_RANGE # Interval ;
numericIntervalExpr : num=NUMBER interval=NUMERIC_DATE_RANGE # NumericInterval ;
currentIntervalExpr: (THIS|LAST) interval=intervalExpr # CurrentIntervalCommon ;
previousIntervalExpr: PREVIOUS interval=intervalExpr # PreviousIntervalCommon ;

