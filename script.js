document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        currentTab: 'sunu',
        questions: {
            sunu: [...appData.sunu],
            walkthrough: [...appData.walkthrough]
        }
    };

    // DOM Elements
    const wrapper = document.getElementById('quiz-wrapper');
    const title = document.getElementById('section-title');
    const navBtns = document.querySelectorAll('.nav-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const restartBtn = document.getElementById('restart-btn');

    // Utility: Shuffle
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Main Render Function
    function renderQuestions() {
        wrapper.innerHTML = '';
        const currentQuestions = state.questions[state.currentTab];

        currentQuestions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.style.animationDelay = `${index * 0.05}s`;

            const header = document.createElement('div');
            header.className = 'question-header';
            header.innerHTML = `<h3 class="question-text">${index + 1}. ${q.text.replace(/^\d+\.\s*/, '')}</h3>`;

            const optionsList = document.createElement('div');
            optionsList.className = 'options-list';

            q.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.dataset.key = opt.key;
                
                // Keep literal answer characters if needed
                btn.innerHTML = `<span class="option-key">${opt.key}</span> <span>${opt.text}</span>`;
                
                btn.addEventListener('click', () => handleOptionClick(btn, q, optionsList, card));
                optionsList.appendChild(btn);
            });

            const feedback = document.createElement('div');
            feedback.className = 'feedback';
            
            card.appendChild(header);
            card.appendChild(optionsList);
            card.appendChild(feedback);
            wrapper.appendChild(card);
        });
    }

    // Handle Option Click
    function handleOptionClick(clickedBtn, question, optionsList, card) {
        // Prevent clicking again
        const allBtns = optionsList.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);
        
        const isCorrect = clickedBtn.dataset.key === question.answer;
        const feedback = card.querySelector('.feedback');

        if (isCorrect) {
            clickedBtn.classList.add('correct');
            feedback.textContent = '✅ Doğru cevap!';
            feedback.className = 'feedback show correct-feedback';
        } else {
            clickedBtn.classList.add('wrong');
            feedback.textContent = `❌ Yanlış! Doğru cevap: ${question.answer}`;
            feedback.className = 'feedback show wrong-feedback';
            
            // Highlight correct one
            allBtns.forEach(b => {
                if (b.dataset.key === question.answer) {
                    b.classList.add('correct');
                }
            });
        }
    }

    // Handlers
    function switchTab(tabId) {
        state.currentTab = tabId;
        
        // Update Nav Active State
        navBtns.forEach(btn => {
            if (btn.dataset.target === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Title
        title.textContent = tabId === 'sunu' ? 'Sunu Testi' : 'Walkthrough Testi';
        
        renderQuestions();
        
        // Scroll to top
        document.querySelector('.quiz-container').scrollTo(0, 0);
    }

    function handleRestart() {
        renderQuestions();
        document.querySelector('.quiz-container').scrollTo(0, 0);
    }

    function handleShuffle() {
        // Shuffle current tab's questions
        const shuffledQuestions = shuffleArray([...state.questions[state.currentTab]]);
        
        // Shuffle options for each question independently
        shuffledQuestions.forEach((q, index) => {
            shuffledQuestions[index] = {
                ...q,
                options: shuffleArray([...q.options])
            };
        });

        state.questions[state.currentTab] = shuffledQuestions;
        renderQuestions();
        document.querySelector('.quiz-container').scrollTo(0, 0);
    }

    // Event Listeners
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.target));
    });

    restartBtn.addEventListener('click', handleRestart);
    shuffleBtn.addEventListener('click', handleShuffle);

    // Initial Render
    renderQuestions();
});
