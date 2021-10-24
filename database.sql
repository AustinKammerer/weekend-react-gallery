-- Database Name: react_gallery

-- create table
CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "likes" INT DEFAULT 0
);

-- move data from server to database
INSERT INTO "gallery" ("path", "description")
    VALUES ('images/grand_canyon_selfie.jpg', 'Me and my girlfriend, Victoria, at the Grand Canyon'),
    ('images/ArapahoeBasin_01.jpeg', 'View of the upper front side of Araphaoe Basin Ski Area'),
    ('images/Pose_lake_MN.jpeg','Sunset over of Pose Lake in the Boundary Waters Canoe Area Wilderness'),
    ('images/haystack_rock_OR.jpg','Haystack Rock (northwest face) at Cannon Beach, OR'),
    ('images/stuck_loader.jpg','Front-end loader stuck in the snow OOPS!'),
    ('images/multnomah_falls_OR.jpeg','Multnomah Falls, a two-tier waterfall in the Columbia River Gorge, OR')