import Header from "../Components/Header/Header";
import headerImage from "";
function Home() {
    return ( 
        <>
        <Header
            title="Welcome to our books shop."
            image={headerImage}>
                A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its predecessor, the scroll. A single sheet in a codex is a leaf and each side of a leaf is a page.
        </Header>
        </>
     );
}

export default Home;