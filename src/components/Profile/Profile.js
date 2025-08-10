import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimeLineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resumeData from "../../utils/resumeData";
import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButtom from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimeLineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require("../../assets/images/RajPic.jpg")} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline title="" icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} link=""/>
          <CustomTimelineItem title="Title" text={resumeData.title} link=""/>
          <CustomTimelineItem
            title="Email"
            text={resumeData.email}
            link={`mailto:${resumeData.email}`}
          />

          {Object.keys(resumeData.socials).map((key, idx) => (
            <CustomTimelineItem
              key={idx}
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>

        <div className="button_container" style={{ display: "flex" }}>
          <a
            href={resumeData.resume}
            target={"_blank"}
            rel="noopener noreferrer"
            className="a_nostyles"
          >
            <CustomButtom text={"Download Cv"} icon={<GetAppIcon />} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
