-- A script that lists the number of records with the same score
-- in the table second_table of the database hbtn_0c_0 in MySQL server.
-- The result displays:
--	the score
--	the number of records for this score with the label number
-- The list is sorted by the number of records (descending)
SELECT score, COUNT(*) AS number
	FROM second_table
	GROUP BY score
	ORDER BY score DESC;
