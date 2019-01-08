parser grammar DateRangeParser;
options {tokenVocab = DateRangeLexer;}

mainExpression : expr EOF;

expr :
  date=basicDateExpr # BasicDate
  | (THIS|LAST) interval=intervalExpr # CurrentInterval
  | LAST interval=numericIntervalExpr # LastNumericInterval
  | PREVIOUS interval=intervalExpr # PreviousInterval
  | PREVIOUS interval=numericIntervalExpr # PreviousNumericInterval
  | BETWEEN min=betweenArgExpr AND max=betweenArgExpr # Between
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
  ;

intervalExpr : interval=DATE_RANGE # Interval ;
numericIntervalExpr : num=NUMBER interval=NUMERIC_DATE_RANGE # NumericInterval ;
