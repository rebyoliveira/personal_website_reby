import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components'
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import { injectGlobal } from 'styled-components';

injectGlobal`
  .vertical-timeline-element-content {
    color: black;
    font-family: 'proxima-nova', futura-pt space;
  }

  .vertical-timeline-element--work .vertical-timeline-element-content {
    border-top: 3px solid #61dafb;
  }

  .vertical-timeline-element--education .vertical-timeline-element-content {
    border-top: 3px solid #61dafb;
  }

  @media only screen and (min-width: 1170px) {
    .vertical-timeline-element-content {
      width: 45% !important;
    }
  }

  span.vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #60dafb30, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .vertical-timeline::before {
    background-color: #60dafb30 !important;
  }
`;

const NameStyle = styled.p`
  font-family: 'proxima-nova', futura-pt space;
  font-size: 30px;
  display: block;
  color: rgb(0, 0, 0);
  line-height: 10px;
  text-align: center;
  vertical-align: baseline;
  word-wrap: break-word;
  padding: 50px 0px 00px 0px;
`

const Timeline = () =>(
  <div>
    <NameStyle>My journey:</NameStyle>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Started to Study React JS</h3>
          <p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">First Contact with Code</h3>
          <p>
          I am a creative person and I always like to create something using my mind together with my heart. After a few weeks looking for different programming languages, I felt that Frotend was my place. So I started to study through Code Academy, Free Code Camp and Udemy things about HTML, CSS, and JavaScript.

          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2017"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Business Manager at Sparkling Biz</h3>
          <p>
            Working in a tech company, I was responsible for all administrative and finance area.
            But, for being in the technological environment, grown up inside of me the interest to change my career and become a web developer.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013 - 2016"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Business Manager at Zertico Cloud Solutions</h3>
          <p>
            This was my first job in a tech company, where I have opened my eyes to this world of creating amazing things using codes.
            I worked in the business area, but I was learning with homeopathic doses, things about the flux of software development, participating in workshops and business negotiation.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2013"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">MBA - Master in Business Management</h3>
          <p>
            Working in a business area, I decided to do an MBA to improve my management skills.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2013"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Working with Business Management</h3>
          <p>
            During this period I had no idea about tech companies, working just with business and finance areas.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010"
          iconStyle={{ background: '#867e7e', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Foreign Trade</h3>
          <p>
            My background and University Degree is in Business with a specialization in Foreign Trade.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <hr />
  </div>
  );

export default Timeline;