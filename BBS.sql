-- 게시판
CREATE TABLE `BBS` (
	`BBS_ID`      INT          NOT NULL COMMENT '기본키', -- 기본키
	`BBS_TITLE`   VARCHAR(200) NULL     COMMENT '제목', -- 제목
	`BBS_USER`    VARCHAR(20)  NULL     COMMENT '작성자', -- 작성자
	`BBS_CONTENT` LONGTEXT     NULL     COMMENT '내용', -- 내용
	`BBS_DATE`    DATE         NULL     COMMENT '작성일', -- 작성일
)
COMMENT '게시판';

-- 게시판
ALTER TABLE `BBS`
	ADD CONSTRAINT `PK_BBS` -- 게시판 기본키
		PRIMARY KEY (
			`BBS_ID` -- 기본키
		);

ALTER TABLE `BBS`
	MODIFY COLUMN `BBS_ID` INT NOT NULL AUTO_INCREMENT COMMENT '기본키';

ALTER TABLE `BBS`
	AUTO_INCREMENT = 1;