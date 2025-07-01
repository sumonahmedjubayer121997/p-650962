
export const randomBlob = (blobRef) => {
    const blob = blobRef.current;

    if (blob) {
        const maxWidthForFixedPosition = 480;
        const maxLimit = 150; // Increased limit for more movement
        const maxPosition = 120; // Increased for better positioning
        
        const screenRect = document.body.getBoundingClientRect();
        const blobRect = blob.getBoundingClientRect();

        const maxX = screenRect.width - blobRect.width;
        const maxY = screenRect.height - blobRect.height;

        // Enhanced fixed positions for mobile
        const fixedPositions = [
            [Math.random() * maxPosition, Math.random() * maxPosition],
            [Math.random() * maxPosition + 50, Math.random() * maxPosition + 50],
            [Math.random() * maxPosition + 100, Math.random() * maxPosition],
            [Math.random() * maxPosition, Math.random() * maxPosition + 100],
        ];

        let randomX, randomY;

        if (window.innerWidth <= maxWidthForFixedPosition) {
            const randomIndex = Math.floor(Math.random() * fixedPositions.length);
            [randomX, randomY] = fixedPositions[randomIndex];
        } else {
            randomX = Math.random() * maxX;
            randomY = Math.random() * maxY;

            // Enhanced limits for desktop
            randomX = Math.min(randomX, maxLimit);
            randomY = Math.min(randomY, maxLimit);
        }

        // Add smooth transition
        blob.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Add slight rotation for more dynamic effect
        const rotation = Math.random() * 360;
        blob.style.transform += ` rotate(${rotation}deg)`;
    }
};
