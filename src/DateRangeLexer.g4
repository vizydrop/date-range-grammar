lexer grammar DateRangeLexer;

DATE: (NUMERIC+ WHITESPACES+ LETTER+ WHITESPACES+ NUMERIC+)|(NUMERIC+ '-' LETTER+ '-' NUMERIC+) ;
NUMBER: [1-9]NUMERIC* ;
AND: [aA][nN][dD] ;
AGO : [aA][gG][oO] ;
THIS: [tT][hH][iI][sS] ;
LAST: [lL][aA][sS][tT] ;
PREVIOUS: [pP][rR][eE][vV][iI][oO][uU][sS] ;
BETWEEN: [bB][eE][tT][wW][eE][eE][nN] ;
TODAY: [tT][oO][dD][aA][yY] ;
YESTERDAY: [yY][eE][sS][tT][eE][rR][dD][aA][yY] ;
FROM: [fF][rR][oO][mM] ;
TO: [tT][oO] ;
DATE_RANGE: DAY|WEEK|MONTH|QUARTER|YEAR ;
NUMERIC_DATE_RANGE: DAYS|WEEKS|MONTHS|QUARTERS|YEARS ;

WS:  [ \n\t\r]+ -> skip ;

fragment
LETTER : [a-zA-Z0-9_] ;
NUMERIC: [0-9] ;
WHITESPACES: [ \n\t\r] ;
DAYS: [dD][aA][yY][sS] ;
MONTHS: [mM][oO][nN][tT][hH][sS] ;
WEEKS: [wW][eE][eE][kK][sS] ;
QUARTERS: [qQ][uU][aA][rR][tT][eE][rR][sS] ;
YEARS: [yY][eE][aA][rR][sS] ;
DAY: [dD][aA][yY] ;
MONTH: [mM][oO][nN][tT][hH] ;
WEEK: [wW][eE][eE][kK] ;
QUARTER: [qQ][uU][aA][rR][tT][eE][rR] ;
YEAR: [yY][eE][aA][rR] ;
