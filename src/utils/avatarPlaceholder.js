

function getAvatarPlaceholder(name){    
    const firstLetter = name ? name.charAt(0).toUpperCase() : '';
    
        // Function to generate a random color for the background
    const getRandomColor = () => {
        const colors = ['#ff7675', '#74b9ff', '#a29bfe', '#00cec9', '#fdcb6e'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return {
        firstLetter,
        backgroundColor: getRandomColor(),
    }

    
}

export default getAvatarPlaceholder