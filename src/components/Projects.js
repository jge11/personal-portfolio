import { Nav, Tab, TabContainer } from "react-bootstrap"


export const Projects = () => {

    const projects = [
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Buisness Startup",
        description:" Design & Development",
        imgUrl: projImg1,
    },

    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum excepturi sunt maxime, nesciunt accusantium? Consequatur totam atque sed perspiciatis, ratione aspernatur praesentium nesciunt repudiandae nihil, laboriosam odio, ullam quod!
                        </p>
                        <Tab.Container id="projects-tab" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) =>{
                                            return(
                                                <p>{project.title}</p>
                                            )
                                        }
                                        
                                        )
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="third"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}