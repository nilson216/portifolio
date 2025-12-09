// ===== NAVEGAÇÃO DE ARQUIVOS =====
document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const fileItems = document.querySelectorAll('.file-item');
    const tabsContainer = document.querySelector('.tabs-container');
    const editorContent = document.querySelector('.editor-content');
    const currentFileSpan = document.getElementById('current-file');
    const fileTypeSpan = document.getElementById('file-type');

    // Mapeamento de arquivos para tipos
    const fileTypes = {
        'readme': { type: 'Markdown', icon: 'fa-brands fa-markdown', class: 'md' },
        'perfil': { type: 'JavaScript', icon: 'fa-brands fa-js', class: 'js' },
        'contato': { type: 'HTML', icon: 'fa-brands fa-html5', class: 'html' },
        'frontend': { type: 'React', icon: 'fa-brands fa-react', class: 'react' },
        'backend': { type: 'JavaScript', icon: 'fa-brands fa-node', class: 'node' },
        'ferramentas': { type: 'JSON', icon: 'fa-solid fa-gear', class: 'json' },
        'projeto1': { type: 'HTML', icon: 'fa-brands fa-html5', class: 'html' },
        'projeto2': { type: 'JavaScript', icon: 'fa-brands fa-js', class: 'js' },
        'projeto3': { type: 'Python', icon: 'fa-brands fa-python', class: 'python' }
    };

    const fileNames = {
        'readme': 'README.md',
        'perfil': 'perfil.js',
        'contato': 'contato.html',
        'frontend': 'frontend.jsx',
        'backend': 'backend.js',
        'ferramentas': 'ferramentas.json',
        'projeto1': 'website-responsivo.html',
        'projeto2': 'todo-app.js',
        'projeto3': 'api-rest.py'
    };

    // Abrir arquivo ao clicar
    fileItems.forEach(item => {
        item.addEventListener('click', function() {
            const fileId = this.getAttribute('data-file');
            openFile(fileId);
        });
    });

    // Função para abrir arquivo
    function openFile(fileId) {
        // Verificar se a aba já existe
        const existingTab = document.querySelector(`.tab[data-tab="${fileId}"]`);
        
        if (existingTab) {
            // Se já existe, apenas ativar
            activateTab(fileId);
        } else {
            // Criar nova aba
            createTab(fileId);
        }

        // Ativar o arquivo no explorer
        fileItems.forEach(f => f.classList.remove('active'));
        document.querySelector(`[data-file="${fileId}"]`).classList.add('active');

        // Mostrar conteúdo
        showContent(fileId);

        // Atualizar status bar
        updateStatusBar(fileId);
    }

    // Criar nova aba
    function createTab(fileId) {
        const fileInfo = fileTypes[fileId];
        const fileName = fileNames[fileId];
        
        const tab = document.createElement('div');
        tab.className = 'tab';
        tab.setAttribute('data-tab', fileId);
        
        tab.innerHTML = `
            <i class="${fileInfo.icon} file-icon ${fileInfo.class}"></i>
            <span>${fileName}</span>
            <i class="fa-solid fa-xmark close-tab"></i>
        `;
        
        tabsContainer.appendChild(tab);

        // Evento de clique na aba
        tab.addEventListener('click', function(e) {
            if (!e.target.classList.contains('close-tab')) {
                activateTab(fileId);
            }
        });

        // Evento de fechar aba
        tab.querySelector('.close-tab').addEventListener('click', function(e) {
            e.stopPropagation();
            closeTab(fileId);
        });

        activateTab(fileId);
    }

    // Ativar aba
    function activateTab(fileId) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        const tab = document.querySelector(`.tab[data-tab="${fileId}"]`);
        if (tab) {
            tab.classList.add('active');
        }
        showContent(fileId);
        updateStatusBar(fileId);
    }

    // Fechar aba
    function closeTab(fileId) {
        const tab = document.querySelector(`.tab[data-tab="${fileId}"]`);
        const wasActive = tab.classList.contains('active');
        
        tab.remove();

        // Se era a aba ativa, ativar outra
        if (wasActive) {
            const remainingTabs = document.querySelectorAll('.tab');
            if (remainingTabs.length > 0) {
                const lastTab = remainingTabs[remainingTabs.length - 1];
                const lastFileId = lastTab.getAttribute('data-tab');
                activateTab(lastFileId);
            } else {
                // Se não há mais abas, limpar conteúdo
                document.querySelectorAll('.file-content').forEach(c => c.classList.remove('active'));
            }
        }

        // Remover active do arquivo no explorer
        const fileItem = document.querySelector(`[data-file="${fileId}"]`);
        if (fileItem) {
            fileItem.classList.remove('active');
        }
    }

    // Mostrar conteúdo
    function showContent(fileId) {
        document.querySelectorAll('.file-content').forEach(content => {
            content.classList.remove('active');
        });
        const content = document.getElementById(`content-${fileId}`);
        if (content) {
            content.classList.add('active');
        }
    }

    // Atualizar status bar
    function updateStatusBar(fileId) {
        const fileInfo = fileTypes[fileId];
        const fileName = fileNames[fileId];
        
        currentFileSpan.textContent = fileName;
        fileTypeSpan.textContent = fileInfo.type;
    }

    // ===== PASTAS (EXPANDIR/RECOLHER) =====
    const folderItems = document.querySelectorAll('.sub-folder');
    
    folderItems.forEach(folder => {
        folder.addEventListener('click', function(e) {
            const folderName = this.getAttribute('data-folder');
            const folderContent = document.querySelector(`[data-content="${folderName}"]`);
            const toggleIcon = this.querySelector('.folder-toggle');
            
            if (folderContent.classList.contains('open')) {
                folderContent.classList.remove('open');
                toggleIcon.classList.remove('open');
            } else {
                folderContent.classList.add('open');
                toggleIcon.classList.add('open');
            }
        });
    });

    // ===== SIDEBAR VIEWS =====
    const sidebarIcons = document.querySelectorAll('.icon-item');
    
    sidebarIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            sidebarIcons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // ===== ANIMAÇÃO DE DIGITAÇÃO (OPCIONAL) =====
    const codeLines = document.querySelectorAll('.code-content code span');
    let delay = 0;
    
    codeLines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s ease';
        }, delay);
        delay += 30;
    });

    // ===== ATALHOS DE TECLADO =====
    document.addEventListener('keydown', function(e) {
        // Ctrl + W - Fechar aba ativa
        if (e.ctrlKey && e.key === 'w') {
            e.preventDefault();
            const activeTab = document.querySelector('.tab.active');
            if (activeTab) {
                const fileId = activeTab.getAttribute('data-tab');
                closeTab(fileId);
            }
        }

        // Ctrl + Tab - Próxima aba
        if (e.ctrlKey && e.key === 'Tab') {
            e.preventDefault();
            const tabs = Array.from(document.querySelectorAll('.tab'));
            const activeIndex = tabs.findIndex(t => t.classList.contains('active'));
            const nextIndex = (activeIndex + 1) % tabs.length;
            if (tabs[nextIndex]) {
                const fileId = tabs[nextIndex].getAttribute('data-tab');
                activateTab(fileId);
            }
        }
    });

    // ===== WELCOME MESSAGE =====
    console.log('%c🚀 Bem-vindo ao Portfólio de Nilson!', 'color: #007acc; font-size: 20px; font-weight: bold;');
    console.log('%cDesenvolvedor Júnior | Explore os arquivos para conhecer mais sobre mim!', 'color: #4ec9b0; font-size: 14px;');
    console.log('%c💡 Dica: Use Ctrl+W para fechar abas e Ctrl+Tab para navegar entre elas', 'color: #ce9178; font-size: 12px;');

    // ===== EASTER EGG =====
    let clickCount = 0;
    const logo = document.querySelector('.title-bar-left i');
    
    if (logo) {
        logo.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                alert('🎉 Easter Egg encontrado! Você é curioso(a)! 🎉\n\nObrigado por explorar meu portfólio!');
                clickCount = 0;
            }
        });
    }

    // ===== RESPONSIVE SIDEBAR TOGGLE (Mobile) =====
    if (window.innerWidth <= 480) {
        const explorerPanel = document.querySelector('.explorer-panel');
        let sidebarVisible = true;

        sidebarIcons.forEach(icon => {
            icon.addEventListener('click', function() {
                if (window.innerWidth <= 480) {
                    if (sidebarVisible) {
                        explorerPanel.style.display = 'none';
                        sidebarVisible = false;
                    } else {
                        explorerPanel.style.display = 'block';
                        sidebarVisible = true;
                    }
                }
            });
        });
    }

    // ===== ANIMAÇÃO DE HOVER NOS ÍCONES =====
    const allIcons = document.querySelectorAll('i');
    allIcons.forEach(icon => {
        icon.style.transition = 'all 0.2s ease';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.editor-content').forEach(content => {
    content.style.scrollBehavior = 'smooth';
});

// ===== DETECTAR TEMA DO SISTEMA (FUTURO) =====
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
    console.log('Tema escuro detectado - já estamos usando! 😎');
} else {
    console.log('Tema claro detectado, mas mantemos o VS Code dark theme! 🌙');
}