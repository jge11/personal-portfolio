import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState (0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate= [ "Web Developer", "Web Designer", "UI/UX Desinger" ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() *100)
    const period = 2000;

    useEffect (() => {
        let ticker =setInterval(() => {
            tick();
        },delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
          }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ""){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    
    return (
        <section className="banner" id="home">
          <Container>
            <Row className="aligh-items-center">
              <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio
              </span>
                        <h1>
                            {`Hi I'm Javier Garcia-Estrada`}<span className="wrap">{text}</span>
                        </h1>
                        <p> I am a self-taught programmer. I took an interest in web development as I found it to be an interesting field I knew nothing about. But wanted to know how websites work and the process it takes to build one.
                            I am interested in learning more about the field as I work in it and learn from those who have been at it longer than I have so I can cultivate my skills even more and make them more refined.
                        </p>
                        <button onClick={() => console.log("connect")}> Let's Connect <ArrowRightCircle size={25}/></button>
                        <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

//end video 34:55