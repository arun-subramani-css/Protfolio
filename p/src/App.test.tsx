import React from "react";
import { render, screen } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "theme";
import { Navbar } from "shared/navbar/Navbar";
import { Landing } from "pages/landing/Landing";
import { ProductApproach } from "pages/approach/ProductApproach";
import GradientMenu from "components/ui/gradient-menu";
import KanbanBoard from "components/ui/kanban-board";
import { getProjectKanbanData } from "pages/featured-projects/case-study/projectKanbanData";
import { GlassmorphismProfileCard } from "components/ui/profile-card-1";

test("renders Navbar with brand and navigation controls", () => {
    render(
        <ChakraProvider theme={theme}>
            <Navbar />
        </ChakraProvider>
    );

    expect(screen.getByText(/ARUN SUBRAMANI/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Open navigation menu/i })).toBeInTheDocument();
});

test("renders GradientMenu with portfolio items", () => {
    render(<GradientMenu mode="portfolio" />);

    expect(screen.getByRole("button", { name: /Navigate to Home/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Navigate to Work/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Navigate to Approach/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Navigate to Resume/i })).toBeInTheDocument();
});

test("renders Landing Hero with headline and actions", () => {
    render(
        <ChakraProvider theme={theme}>
            <Landing />
        </ChakraProvider>
    );

    expect(
        screen.getByText(/I turn ideas into useful digital products\./i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Explore My Work/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Get in Touch/i })).toBeInTheDocument();
});

test("renders Product Approach section with 4 steps", () => {
    render(
        <ChakraProvider theme={theme}>
            <ProductApproach />
        </ChakraProvider>
    );

    expect(screen.getByText(/How I Approach Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Understand the Problem/i)).toBeInTheDocument();
    expect(screen.getByText(/Explore the Solution/i)).toBeInTheDocument();
    expect(screen.getByText(/Design the Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Build and Iterate/i)).toBeInTheDocument();
});

test("renders KanbanBoard with project columns and tasks", () => {
    const columns = getProjectKanbanData("launtree");
    render(<KanbanBoard columns={columns} />);

    expect(screen.getByText(/^Backlog$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Planned$/i)).toBeInTheDocument();
    expect(screen.getByText(/^In Progress$/i)).toBeInTheDocument();
    expect(screen.getByText(/^In Review$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Done$/i)).toBeInTheDocument();
    expect(screen.getByText(/4-Stage CSPRNG OTP Security Gates/i)).toBeInTheDocument();
});

test("renders GlassmorphismProfileCard with profile info and actions", () => {
    const { rerender } = render(
        <GlassmorphismProfileCard
            name="Arun Subramani"
            title="Associate Product Manager"
            bio="Building intuitive digital experiences."
            actionButton={{ text: "Contact Me", href: "#contact" }}
        />
    );

    expect(screen.getByText("Arun Subramani")).toBeInTheDocument();
    expect(screen.getByText("Associate Product Manager")).toBeInTheDocument();
    expect(screen.getByText("Building intuitive digital experiences.")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();

    // Verify button is not rendered when actionButton is omitted
    rerender(
        <GlassmorphismProfileCard
            name="Arun Subramani"
            bio="Building intuitive digital experiences."
        />
    );
    expect(screen.queryByText("Contact Me")).not.toBeInTheDocument();
});
