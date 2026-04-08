document.addEventListener('DOMContentLoaded', () => {
    // State
    const state = {
        currentTab: 'sunu',
        expertMode: false,
        userAnswers: {},
        questions: {
            sunu: [...appData.sunu],
            walkthrough: [...appData.walkthrough],
            bilgiguvenligi: [...appData.bilgiguvenligi],
            sibergiris1: [...appData.sibergiris1],
            siber_giris_2: [...appData.siber_giris_2],
            veri_iletisimi: [...appData.veri_iletisimi]
        }
    };

    // DOM Elements
    const wrapper = document.getElementById('quiz-wrapper');
    const title = document.getElementById('section-title');
    const navBtns = document.querySelectorAll('.nav-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const restartBtn = document.getElementById('restart-btn');
    
    // Expert Mode Elements
    const expertToggleCb = document.getElementById('expert-toggle-cb');
    const submitWrapper = document.getElementById('submit-wrapper');
    const submitBtn = document.getElementById('submit-exam-btn');
    const expertSummary = document.getElementById('expert-summary');

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
        expertSummary.style.display = 'none';
        
        // Reset expert mode evaluation view if active
        if (state.expertMode) {
            submitWrapper.style.display = 'flex';
        } else {
            submitWrapper.style.display = 'none';
        }

        const currentQuestions = state.questions[state.currentTab];

        currentQuestions.forEach((q, index) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.id = `q-card-${index}`;
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
        const allBtns = optionsList.querySelectorAll('.option-btn');
        
        if (state.expertMode) {
            // EXPERT MODE: Just select the answer, don't show result
            allBtns.forEach(b => b.classList.remove('selected'));
            clickedBtn.classList.add('selected');
            state.userAnswers[question.id] = clickedBtn.dataset.key;
        } else {
            // NORMAL MODE: Immediate feedback
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
    }

    // Evaluate Exam
    function handleEvaluateExam() {
        const currentQuestions = state.questions[state.currentTab];
        let correctC = 0;
        let wrongC = 0;
        let unansweredC = 0;
        
        let incorrectHtml = '';

        currentQuestions.forEach((q, index) => {
            const uAns = state.userAnswers[q.id];
            if (!uAns) {
                unansweredC++;
            } else if (uAns === q.answer) {
                correctC++;
            } else {
                wrongC++;
                // Find correct option text
                const correctOpt = q.options.find(o => o.key === q.answer);
                incorrectHtml += `
                    <div class="incorrect-item" onclick="document.getElementById('q-card-${index}').scrollIntoView({behavior: 'smooth', block: 'center'});">
                        <h4>Soru ${index + 1}: ${q.text.replace(/^\d+\.\s*/, '')}</h4>
                        <p>Senin Cevabın: <strong>${uAns}</strong></p>
                        <p class="correct-ans">Doğru Cevap: ${q.answer} - ${correctOpt ? correctOpt.text : ''}</p>
                        <p class="click-hint">👁️ Soruyu ve şıkları görmek için tıkla</p>
                    </div>
                `;
            }
        });

        // Compute scoreboard
        expertSummary.innerHTML = `
            <div class="summary-title">Değerlendirme Sonucu</div>
            <div class="summary-stats">
                <div class="stat-box st-correct">
                    <span class="count">${correctC}</span>
                    <span class="label">Doğru</span>
                </div>
                <div class="stat-box st-wrong">
                    <span class="count">${wrongC}</span>
                    <span class="label">Yanlış</span>
                </div>
                <div class="stat-box st-unanswered">
                    <span class="count">${unansweredC}</span>
                    <span class="label">Boş</span>
                </div>
            </div>
            ${wrongC > 0 ? `<div class="incorrect-list"><h3>Hatalı Sorular</h3>${incorrectHtml}</div>` : `<div style="text-align:center; color:var(--success); font-weight:bold; font-size:1.2rem; margin-top:20px;">Harika, hiç yanlışın yok! 🎉</div>`}
        `;
        
        expertSummary.style.display = 'block';
        submitWrapper.style.display = 'none'; // hide submit button
        
        // Disable all buttons to prevent changing answers after exam
        const allBtns = wrapper.querySelectorAll('.option-btn');
        allBtns.forEach(b => b.disabled = true);

        // Scroll to top to see summary
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector('.quiz-container').scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // Handlers
    function switchTab(tabId) {
        state.currentTab = tabId;
        state.userAnswers = {}; // Reset answers
        
        // Update Nav Active State
        navBtns.forEach(btn => {
            if (btn.dataset.target === tabId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Title
        if (tabId === 'sunu') title.textContent = 'Sunu Testi';
        else if (tabId === 'walkthrough') title.textContent = 'Walkthrough Testi';
        else if (tabId === 'bilgiguvenligi') title.textContent = 'Bilgi Güvenliği Testi';
        else if (tabId === 'sibergiris1') title.textContent = 'Siber Güvenliğe Giriş 1. Slayt Soruları';
        else if (tabId === 'siber_giris_2') title.textContent = 'Siber Güvenliğe Giriş 2. Slayt Soruları';
        else if (tabId === 'veri_iletisimi') title.textContent = 'Veri İletişimi ve Bilgisayar Ağları';
        
        renderQuestions();
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector('.quiz-container').scrollTo(0, 0);
        }
    }

    function handleRestart() {
        state.userAnswers = {}; // reset user answers
        renderQuestions();
        if (window.innerWidth <= 768) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector('.quiz-container').scrollTo(0, 0);
        }
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
        handleRestart(); // This also clears state and scrolls
    }

    function toggleExpertMode(e) {
        state.expertMode = e.target.checked;
        handleRestart(); // Reset test when toggled
    }

    // Event Listeners
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.target));
    });

    restartBtn.addEventListener('click', handleRestart);
    shuffleBtn.addEventListener('click', handleShuffle);
    expertToggleCb.addEventListener('change', toggleExpertMode);
    submitBtn.addEventListener('click', handleEvaluateExam);

    // Initial Render
    renderQuestions();
});
