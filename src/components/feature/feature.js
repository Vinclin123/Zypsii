import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import image from "../../assert/Screenshot__67_-removebg-preview.png";
import image1 from "../../assert/Screenshot__73_-removebg-preview.png";
import image2 from "../../assert/Screenshot__72_-removebg-preview.png";

export default function FeaturesSection() {
    const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
    const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });

    return (
        <>
            <Container className="text-center container-fluid py-5" ref={ref1}>
                <Row className="align-items-center">
                    <Col md={4} className="text-center">
                        <motion.img
                            src={image}
                            height={5}
                            alt="App Screenshot"
                            className="img-fluid rounded"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView1 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        />
                    </Col>
                    <Col md={8} className="text-start">
                        <motion.h2 
                            className="fw-bold d-flex justify-content-center" 
                            initial={{ opacity: 0 }} 
                            animate={inView1 ? { opacity: 1 } : {}} 
                            transition={{ duration: 1 }}>
                            Plan your extraordinary getaway.
                        </motion.h2>
                        <Row className="mt-4">
                            {["Browse", "Book", "Travel"].map((title, index) => (
                                <Col md={4} className="text-center" key={index}>
                                    <motion.img
                                        src={image2}
                                        height={100}
                                        width={60}
                                        alt={`${title} Icon`}
                                        className="mb-2"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={inView1 ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                    />
                                    <h5>{title}</h5>
                                    <p>
                                        {title === "Browse" && "Search from our 65+ destinations based on your choice of region, company, and availability."}
                                        {title === "Book" && "Book your stay with quick and easy steps using a secure payment method."}
                                        {title === "Travel" && "And off you go, on yet another thrilling adventure. It’s that easy."}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
            
            <Container className="text-center py-5" ref={ref2}>
                <Row className="align-items-center">
                    <Col md={8} className="text-start">
                        <motion.h2 
                            className="fw-bold d-flex justify-content-center" 
                            initial={{ opacity: 0 }} 
                            animate={inView2 ? { opacity: 1 } : {}} 
                            transition={{ duration: 1 }}>
                            Plan your extraordinary getaway.
                        </motion.h2>
                        <Row className="mt-4">
                            {["Browse", "Book", "Travel"].map((title, index) => (
                                <Col md={4} className="text-center" key={index}>
                                    <motion.img
                                        src={image1}
                                        height={100}
                                        width={60}
                                        alt={`${title} Icon`}
                                        className="mb-2"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={inView2 ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.3 }}
                                    />
                                    <h5>{title}</h5>
                                    <p>
                                        {title === "Browse" && "Search from our 65+ destinations based on your choice of region, company, and availability."}
                                        {title === "Book" && "Book your stay with quick and easy steps using a secure payment method."}
                                        {title === "Travel" && "And off you go, on yet another thrilling adventure. It’s that easy."}
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={4} className="text-center">
                        <motion.img
                            src={image1}
                            width={500}
                            alt="App Screenshot"
                            className="img-fluid rounded"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView2 ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
