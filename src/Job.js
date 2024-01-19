import React, { useState } from "react";
import { Badge, Button, Card, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import useFetchJobs from "./useFetchJobs";
const Job = ({ job }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              {new DataTransfer(job.created_at.toLocalDataString())}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">
              {job.type}
            </Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div style={{ wordBread: "break-all" }}>
              <ReactMarkdown source={useFetchJobs.how_to_apply} />
            </div>
          </div>
          <img
            className="d-sm-none d-md-block"
            height={50}
            src="job.company_logo"
            alt={job.company}
          />
        </div>
        <Card.Text>
          <Button
            variant="primary"
            onClick={() => setOpen((prevOpen = !prevOpen))}
          >
            {open ? "Hide Details" : "View Details"}
          </Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source="{job.description}" />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
};

export default Job;
