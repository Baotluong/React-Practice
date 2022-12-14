import { useState } from "react";

const linksInit = [
    { url: "https://bit.ly/3lmYVna", show: true},
    { url: "https://bit.ly/3flyaMj", show: true},
];

const Gallery = () => {
    const [links, setLinks] = useState(linksInit);

    const removeOnClick = (linkToRemove) => {
        const updatedLinks = links.map(link => link.url === linkToRemove.url ? { ...link, show: false} : link);
        setLinks(updatedLinks);
    };

    return (
        <div>
            { links.map(link => {
                return link.show && (
                    <div>
                        <img key={link.url} src={link.url} alt="moo" />
                        <button onClick={() => removeOnClick(link)}>Remove</button>
                    </div>
                );
            })}
        </div>
    )
};

export default Gallery;
