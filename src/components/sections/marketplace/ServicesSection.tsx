import React from "react";
import Container from "@/components/layout/Container";
import ServicesGrid from "./Services/ServicesGrid";

const ServicesSection = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            <Container>
                {/* Static Featured Services Section */}
                <ServicesGrid />
            </Container>
        </section>
    );
};

export default ServicesSection;
