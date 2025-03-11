import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectProjectsVisibility } from "../../redux/selectors/projectsSelector";
import { RootState } from "../../redux/store";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import "./projects.css";
import JSCreate from './images/jobScraper/create.png';
import HUIIntro from './images/hingeUI/intro.png';
import PLoader from './images/profile/loader.png';

declare var require: any;

export const Projects: FC = () => {
  const projectsVisibility = useSelector(selectProjectsVisibility);

  const largeProjects = [
    {
      title: 'Job Scraper',
      description: 'Application that manages websites to scrape for job postings.  Features Slack integration, ability to set client side filters, and running the scrapers on a schedule.',
      techStack: ['Python', 'Flask', 'Selenium', 'React'],
      images: [JSCreate]
    },
    {
      title: 'Profile',
      description: 'Webpage to display my bio and projects.',
      techStack: ['Typescript', 'React', 'Redux'],
      images: [PLoader]
    }
  ]

  const smallProjects = [
    {
      title: 'Hinge UI',
      description: 'Created to replicate the Hinge messaging UI in 2022. I wanted to preserve the first conversations I ever had with my girlfriend, long after deleting the app.',
      techStack: ['React'],
      images: [HUIIntro]
    }
  ]

  return (
    <div>
      {projectsVisibility ? (
        <Box className="projectsContainer">
          <Typography gutterBottom variant="body2">
            Large Projects
          </Typography>
          <Stack direction="row" spacing={1}>
          {largeProjects.map((project) => (
            <Card variant="outlined" sx={{ width: '332px', borderRadius: '12px'  }}>
              <img src={project['images'][0]} className="projectsScreenshot"/>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body2">
                  {project['title']}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {project['description']}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {project['techStack'].map((tech) => (
                    <Chip color="primary" label={tech} size="small" />
                  ))}
                </Stack>
              </Box>
            </Card>
          ))}
          </Stack>
          <Typography gutterBottom variant="body2">
            Small Projects
          </Typography>
          {smallProjects.map((project) => (
            <Card variant="outlined" sx={{ width: '332px', borderRadius: '12px'  }}>
              <img src={project['images'][0]} className="projectsScreenshot"/>
              <Divider />
              <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="body2">
                  {project['title']}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {project['description']}
                </Typography>
                <Stack direction="row" spacing={1}>
                  {project['techStack'].map((tech) => (
                    <Chip color="primary" label={tech} size="small" />
                  ))}
                </Stack>
              </Box>
            </Card>
          ))}
          
        </Box>
      ) : null}
    </div>
  );
};
