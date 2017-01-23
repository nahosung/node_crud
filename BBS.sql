-- �Խ���
CREATE TABLE `BBS` (
	`BBS_ID`      INT          NOT NULL COMMENT '�⺻Ű', -- �⺻Ű
	`BBS_TITLE`   VARCHAR(200) NULL     COMMENT '����', -- ����
	`BBS_USER`    VARCHAR(20)  NULL     COMMENT '�ۼ���', -- �ۼ���
	`BBS_CONTENT` LONGTEXT     NULL     COMMENT '����', -- ����
	`BBS_DATE`    DATE         NULL     COMMENT '�ۼ���', -- �ۼ���
)
COMMENT '�Խ���';

-- �Խ���
ALTER TABLE `BBS`
	ADD CONSTRAINT `PK_BBS` -- �Խ��� �⺻Ű
		PRIMARY KEY (
			`BBS_ID` -- �⺻Ű
		);

ALTER TABLE `BBS`
	MODIFY COLUMN `BBS_ID` INT NOT NULL AUTO_INCREMENT COMMENT '�⺻Ű';

ALTER TABLE `BBS`
	AUTO_INCREMENT = 1;