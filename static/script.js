document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('predictionForm');
    const progressFill = document.getElementById('progressFill');
    const predictBtn = document.getElementById('predictBtn');
    const loading = document.getElementById('loading');
    const inputs = form.querySelectorAll('input, select');
    
    // Particle system for background
    createParticles();
    
    function createParticles() {
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        document.body.appendChild(particleContainer);
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
                animation: floatParticle ${Math.random() * 20 + 10}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
            `;
            particleContainer.appendChild(particle);
        }
    }
    
    // Add CSS for particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(10px) rotate(90deg); }
            50% { transform: translateY(-10px) translateX(-10px) rotate(180deg); }
            75% { transform: translateY(-30px) translateX(5px) rotate(270deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Enhanced progress tracking with sound effects (visual feedback)
    function updateProgress() {
        const totalFields = inputs.length;
        let filledFields = 0;
        
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                filledFields++;
                input.closest('.form-group').classList.add('completed');
            } else {
                input.closest('.form-group').classList.remove('completed');
            }
        });
        
        const progress = (filledFields / totalFields) * 100;
        progressFill.style.width = progress + '%';
        
        // Add completion celebration
        if (progress === 100) {
            predictBtn.disabled = false;
            predictBtn.style.opacity = '1';
            predictBtn.style.transform = 'scale(1.05)';
            
            // Add celebration effect
            setTimeout(() => {
                predictBtn.style.transform = 'scale(1)';
            }, 200);
            
            // Create success particles
            createSuccessParticles();
        } else {
            predictBtn.disabled = true;
            predictBtn.style.opacity = '0.6';
            predictBtn.style.transform = 'scale(1)';
        }
    }
    
    function createSuccessParticles() {
        const rect = predictBtn.getBoundingClientRect();
        for (let i = 0; i < 10; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width/2}px;
                top: ${rect.top + rect.height/2}px;
                width: 6px;
                height: 6px;
                background: #22c55e;
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: explodeParticle 1s ease-out forwards;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 1000);
        }
    }
    
    // Add explosion animation
    const explosionStyle = document.createElement('style');
    explosionStyle.textContent = `
        @keyframes explodeParticle {
            0% {
                transform: scale(1) translate(0, 0);
                opacity: 1;
            }
            100% {
                transform: scale(0) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
                opacity: 0;
            }
        }
        
        .form-group.completed {
            animation: completePulse 0.5s ease-out;
        }
        
        @keyframes completePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(explosionStyle);
    
    // Enhanced input interactions
    inputs.forEach((input, index) => {
        input.addEventListener('input', updateProgress);
        input.addEventListener('change', updateProgress);
        
        // Add typing effect for number inputs
        if (input.type === 'number') {
            input.addEventListener('input', function() {
                this.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        }
        
        // Add selection effect for dropdowns
        if (input.tagName === 'SELECT') {
            input.addEventListener('change', function() {
                this.style.background = 'linear-gradient(45deg, rgba(238, 119, 82, 0.1), rgba(231, 60, 126, 0.1))';
                setTimeout(() => {
                    this.style.background = '';
                }, 500);
            });
        }
    });
    
    // Enhanced form submission with more visual feedback
    form.addEventListener('submit', function(e) {
        if (predictBtn.disabled) {
            e.preventDefault();
            // Shake animation for disabled button
            predictBtn.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                predictBtn.style.animation = '';
            }, 500);
            return;
        }
        
        predictBtn.style.display = 'none';
        loading.style.display = 'block';
        
        // Add loading particles
        createLoadingEffect();
    });
    
    function createLoadingEffect() {
        const loadingContainer = document.querySelector('.loading');
        const particles = [];
        
        for (let i = 0; i < 5; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 8px;
                height: 8px;
                background: #e73c7e;
                border-radius: 50%;
                animation: loadingBounce 1.5s ease-in-out infinite;
                animation-delay: ${i * 0.1}s;
                left: ${20 + i * 15}%;
                top: 50%;
            `;
            loadingContainer.appendChild(particle);
            particles.push(particle);
        }
        
        // Clean up particles after 10 seconds
        setTimeout(() => {
            particles.forEach(p => p.remove());
        }, 10000);
    }
    
    // Add loading bounce animation
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        @keyframes loadingBounce {
            0%, 80%, 100% { 
                transform: scale(0) translateY(0); 
            }
            40% { 
                transform: scale(1) translateY(-20px); 
            }
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(loadingStyle);
    
    // Enhanced score animation
    const resultCard = document.getElementById('resultCard');
    if (resultCard) {
        const score = parseFloat(resultCard.querySelector('.result-score').textContent);
        enhancedScoreAnimation(score);
    }
    
    function enhancedScoreAnimation(targetScore) {
        const scoreDisplay = document.getElementById('scoreDisplay');
        let currentScore = 0;
        const increment = targetScore / 100;
        
        const animation = setInterval(() => {
            currentScore += increment;
            if (currentScore >= targetScore) {
                currentScore = targetScore;
                clearInterval(animation);
                
                // Final celebration
                createScoreParticles();
            }
            
            scoreDisplay.textContent = currentScore.toFixed(1) + '%';
            
            // Dynamic color based on score
            if (currentScore >= 80) {
                scoreDisplay.style.color = '#22c55e';
                scoreDisplay.style.textShadow = '0 0 20px rgba(34, 197, 94, 0.5)';
            } else if (currentScore >= 60) {
                scoreDisplay.style.color = '#f59e0b';
                scoreDisplay.style.textShadow = '0 0 20px rgba(245, 158, 11, 0.5)';
            } else {
                scoreDisplay.style.color = '#ef4444';
                scoreDisplay.style.textShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
            }
        }, 30);
    }
    
    function createScoreParticles() {
        const resultCard = document.getElementById('resultCard');
        if (!resultCard) return;
        
        const rect = resultCard.getBoundingClientRect();
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = ['🎉', '⭐', '🎊', '✨'][Math.floor(Math.random() * 4)];
            particle.style.cssText = `
                position: fixed;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
                font-size: 20px;
                pointer-events: none;
                z-index: 1000;
                animation: celebrateParticle 2s ease-out forwards;
            `;
            document.body.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }
    }
    
    // Add celebration animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebrateParticle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1.2) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0.5) rotate(360deg) translateY(-100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(celebrationStyle);
    
    // Initialize
    updateProgress();
    
    // Add mouse trail effect
    let mouseTrail = [];
    document.addEventListener('mousemove', function(e) {
        mouseTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
        
        // Limit trail length
        if (mouseTrail.length > 10) {
            mouseTrail.shift();
        }
        
        // Create trail particle occasionally
        if (Math.random() < 0.1) {
            const trail = document.createElement('div');
            trail.style.cssText = `
                position: fixed;
                left: ${e.clientX}px;
                top: ${e.clientY}px;
                width: 4px;
                height: 4px;
                background: rgba(231, 60, 126, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 999;
                animation: fadeTrail 1s ease-out forwards;
            `;
            document.body.appendChild(trail);
            
            setTimeout(() => trail.remove(), 1000);
        }
    });
    
    // Add trail fade animation
    const trailStyle = document.createElement('style');
    trailStyle.textContent = `
        @keyframes fadeTrail {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(0);
            }
        }
    `;
    document.head.appendChild(trailStyle);
});
