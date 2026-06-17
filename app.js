(() => {
  'use strict';

  const SUITS = ['S', 'H', 'D', 'C'];
  const SUIT_NAMES = { S: 'пики', H: 'черви', D: 'бубны', C: 'трефы' };
  const RANK_NAMES = { 1: 'туз', 11: 'валет', 12: 'дама', 13: 'король' };
  const STORAGE = {
    theme: 'kosynka-theme-v1',
    best: 'kosynka-best-v1',
    sound: 'kosynka-sound-v1'
  };

  const THEMES = {
    default: {
      title: 'Дефолтная', caption: 'Классический зелёный стол', thumb: null,
      accent: '#42d392', meta: '#075c3c', backIcon: '♠', particles: ['♠', '♥', '♦', '♣'],
      suits: { S: '♠', H: '♥', D: '♦', C: '♣' },
      courts: { 11: ['♞', 'Валет'], 12: ['♛', 'Дама'], 13: ['♚', 'Король'] },
      banner: '♠', story: 'Классическая Косынка без лишних эффектов: зелёное сукно, знакомые масти и строгие карты.'
    },
    winx: {
      title: 'Winx', caption: 'Магия, блёстки и крылья', thumb: './assets/thumbs/winx.webp',
      accent: '#ff7ee8', meta: '#7d2b9b', backIcon: '🪽', particles: ['✨', '💫', '🪽', '💖'],
      suits: { S: '🌙', H: '💖', D: '✨', C: '🪽' },
      courts: { 11: ['🧚', 'Фея воздуха'], 12: ['🧚‍♀️', 'Фея света'], 13: ['🪄', 'Хранитель'] },
      banner: '🧚‍♀️', story: 'Собирайте магические школы по своим символам. Дамы превращены в фей, а стол мерцает волшебной пыльцой.'
    },
    pokemon: {
      title: 'Pokémon', caption: 'Жёлтая энергия и стихии', thumb: './assets/thumbs/pokemon.webp',
      accent: '#ffd835', meta: '#1c78bc', backIcon: '⚡', particles: ['⚡', '⭐', '🔴', '✨'],
      suits: { S: '⚡', H: '🔥', D: '💧', C: '🌿' },
      courts: { 11: ['🧢', 'Тренер'], 12: ['⚡', 'Электро'], 13: ['🐉', 'Чемпион'] },
      banner: '⚡', story: 'Четыре масти стали стихиями. Соберите каждую стихию от туза до короля и доведите команду до победы.'
    },
    minecraft: {
      title: 'Minecraft', caption: 'Пиксели, блоки и мобы', thumb: './assets/thumbs/minecraft.webp',
      accent: '#80d757', meta: '#456d32', backIcon: '⛏️', particles: ['🟩', '🟫', '⬛', '💎'],
      suits: { S: '⛏️', H: '❤️', D: '💎', C: '🧱' },
      courts: { 11: ['🧟', 'Моб'], 12: ['🧙', 'Житель'], 13: ['👑', 'Стив'] },
      banner: '⛏️', story: 'Карты выглядят как блоки, а масти — как ресурсы. Стройте цепочки сверху вниз, будто складываете инвентарь.'
    },
    halloween: {
      title: 'Halloween', caption: 'Тыквы, туман и ночные существа', thumb: './assets/thumbs/halloween.webp',
      accent: '#ff8d2d', meta: '#21102f', backIcon: '🎃', particles: ['🦇', '🎃', '🕸️', '👻'],
      suits: { S: '🕷️', H: '🫀', D: '🧠', C: '🦇' },
      courts: { 11: ['🧛', 'Вампир'], 12: ['🧙‍♀️', 'Ведьма'], 13: ['💀', 'Скелет'] },
      banner: '🎃', story: 'Пики стали пауками, трефы — летучими мышами, черви — кровавыми сердцами, а бубны — мозгами.'
    },
    christmas: {
      title: 'Christmas', caption: 'Снег, золото и подарки', thumb: './assets/thumbs/christmas.webp',
      accent: '#e43a43', meta: '#0b6847', backIcon: '🎁', particles: ['❄️', '✨', '⭐', '🎄'],
      suits: { S: '🎄', H: '🎁', D: '🔔', C: '❄️' },
      courts: { 11: ['🦌', 'Олень'], 12: ['🤶', 'Миссис Клаус'], 13: ['🎅', 'Санта'] },
      banner: '🎄', story: 'Соберите четыре праздничные гирлянды: ёлки, подарки, колокольчики и снежинки. Король здесь — Санта.'
    },
    formula1: {
      title: 'Formula 1', caption: 'Скорость, трассы и пит-стопы', thumb: './assets/thumbs/formula1.webp',
      accent: '#ff2738', meta: '#161719', backIcon: '🏁', particles: ['🏁', '🛞', '⚡', '💨'],
      suits: { S: '🏁', H: '🏎️', D: '🏆', C: '🛞' },
      courts: { 11: ['🛞', 'Механик'], 12: ['🏎️', 'Пилот'], 13: ['🏆', 'Чемпион'] },
      banner: '🏎️', story: 'Четыре масти — флаг, болид, кубок и шина. Раскладывайте карты точно, как команда проводит быстрый пит-стоп.'
    },
    hellokitty: {
      title: 'Hello Kitty', caption: 'Розовые бантики и милые герои', thumb: './assets/thumbs/hellokitty.webp',
      accent: '#ff75b6', meta: '#e54c94', backIcon: '🎀', particles: ['🎀', '💗', '🌸', '✨'],
      suits: { S: '🎀', H: '💗', D: '🌸', C: '🐾' },
      courts: { 11: ['🐾', 'Друг'], 12: ['🐱', 'Китти'], 13: ['👑', 'Король милоты'] },
      banner: '🎀', story: 'Нежная розовая тема с бантиками, лапками и сердцами. Правила те же, но каждая победа выглядит особенно мило.'
    },
    pirates: {
      title: 'Pirates', caption: 'Море, корабли и сокровища', thumb: './assets/thumbs/pirates.webp',
      accent: '#d6a446', meta: '#184e5a', backIcon: '🏴‍☠️', particles: ['🫧', '⚓', '🪙', '🌊'],
      suits: { S: '⚓', H: '🍹', D: '💎', C: '☠️' },
      courts: { 11: ['🗡️', 'Матрос'], 12: ['🧭', 'Штурман'], 13: ['🏴‍☠️', 'Капитан'] },
      banner: '🏴‍☠️', story: 'Основания превратились в сундуки сокровищ. Соберите якоря, ром, драгоценности и пиратские знаки.'
    },
    chernobyl: {
      title: 'Чернобыль', caption: 'Радиация, тишина и руины', thumb: './assets/thumbs/chernobyl.webp',
      accent: '#c9f31d', meta: '#354323', backIcon: '☢️', particles: ['☢️', '⚠️', '·', '✦'],
      suits: { S: '☢️', H: '🧬', D: '⚠️', C: '🧪' },
      courts: { 11: ['🐺', 'Сталкер'], 12: ['🧬', 'Мутация'], 13: ['☢️', 'Реактор'] },
      banner: '☢️', story: 'Мрачная зона отчуждения: знаки радиации, мутации, предупреждения и лабораторные колбы. Никаких внешних загрузок.'
    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const clone = value => JSON.parse(JSON.stringify(value));
  const isRed = suit => suit === 'H' || suit === 'D';
  const pad2 = value => String(value).padStart(2, '0');

  class SolitaireApp {
    constructor() {
      this.themeId = localStorage.getItem(STORAGE.theme) || 'default';
      if (!THEMES[this.themeId]) this.themeId = 'default';
      this.best = Number.parseInt(localStorage.getItem(STORAGE.best), 10) || null;
      this.soundEnabled = localStorage.getItem(STORAGE.sound) !== 'false';
      this.history = [];
      this.selected = null;
      this.initialLayout = null;
      this.hintTimer = null;
      this.toastTimer = null;
      this.messageTimer = null;
      this.dealAnimation = false;
      this.dragging = false;
      this.deferredInstallPrompt = null;
      this.audioContext = null;
      this.pointerFine = matchMedia('(pointer:fine)').matches;

      this.els = {
        moves: $('#movesValue'), best: $('#bestValue'), time: $('#timeValue'), redeals: $('#redealsValue'),
        stock: $('#stockPile'), waste: $('#wastePile'), tableau: $('#tableau'),
        statusText: $('#statusText'), gameMessage: $('#gameMessage'), themeCaption: $('#themeCaption'),
        toast: $('#toast'), themeDialog: $('#themeDialog'), themeGrid: $('#themeGrid'),
        rulesDialog: $('#rulesDialog'), rulesTitle: $('#rulesTitle'), rulesContent: $('#rulesContent'),
        installDialog: $('#installDialog'), iosDialog: $('#iosDialog'), endDialog: $('#endDialog'),
        endTitle: $('#endTitle'), endText: $('#endText'), endEmblem: $('#endEmblem'),
        endMoves: $('#endMoves'), endTime: $('#endTime'), nativeInstallBtn: $('#nativeInstallBtn'),
        platformInstructions: $('#platformInstructions')
      };

      this.bindControls();
      this.buildThemeGrid();
      this.applyTheme(this.themeId, false);
      this.newGame();
      this.startTimer();
      this.setupInstall();
      this.registerServiceWorker();
    }

    bindControls() {
      $('#newGameBtn').addEventListener('click', () => this.newGame());
      $('#restartBtn').addEventListener('click', () => this.restartGame());
      $('#undoBtn').addEventListener('click', () => this.undo());
      $('#hintBtn').addEventListener('click', () => this.showHint());
      $('#themesBtn').addEventListener('click', () => this.openDialog(this.els.themeDialog));
      $('#rulesBtn').addEventListener('click', () => this.openRules());
      $('#soundBtn').addEventListener('click', () => this.toggleSound());
      $('#installBtn').addEventListener('click', () => this.openDialog(this.els.installDialog));
      $('#iosBtn').addEventListener('click', () => this.openDialog(this.els.iosDialog));
      $('#endNewBtn').addEventListener('click', () => {
        this.els.endDialog.close();
        this.newGame();
      });

      this.els.stock.addEventListener('click', () => this.drawFromStock());
      this.els.stock.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          this.drawFromStock();
        }
      });

      $$('.foundation-pile').forEach(pile => {
        pile.addEventListener('click', event => {
          if (event.target === pile && this.selected) this.tryMove(this.selected, { type: 'foundation', index: pile.dataset.index });
        });
      });
      $$('.tableau-pile').forEach(pile => {
        pile.addEventListener('click', event => {
          if (event.target === pile && this.selected) this.tryMove(this.selected, { type: 'tableau', index: Number(pile.dataset.index) });
        });
      });

      $$('[data-zone="tableau"], [data-zone="foundation"]').forEach(pile => {
        pile.addEventListener('dragover', event => {
          if (!this.dragging) return;
          event.preventDefault();
          pile.classList.add('drop-ready');
        });
        pile.addEventListener('dragleave', event => {
          if (!pile.contains(event.relatedTarget)) pile.classList.remove('drop-ready');
        });
        pile.addEventListener('drop', event => {
          event.preventDefault();
          pile.classList.remove('drop-ready');
          let source = this.selected;
          try {
            const data = JSON.parse(event.dataTransfer.getData('application/json'));
            if (data?.type) source = data;
          } catch (_) { /* use current selection */ }
          if (!source) return;
          const type = pile.dataset.zone;
          const index = type === 'tableau' ? Number(pile.dataset.index) : pile.dataset.index;
          this.tryMove(source, { type, index });
        });
      });

      document.addEventListener('keydown', event => {
        if (event.metaKey || event.ctrlKey || event.altKey) return;
        const key = event.key.toLowerCase();
        if (key === 'n') this.newGame();
        else if (key === 'r') this.restartGame();
        else if (key === 'u') this.undo();
        else if (key === 'h') this.showHint();
        else if (key === 't') this.openDialog(this.els.themeDialog);
        else if (key === '?') this.openRules();
        else if (key === 'escape') this.clearSelection();
      });

      $$('.platform-tab').forEach(tab => tab.addEventListener('click', () => this.setPlatformTab(tab.dataset.platform)));
      this.els.nativeInstallBtn.addEventListener('click', () => this.installPwa());

      window.addEventListener('online', () => this.toast('Подключение восстановлено. Игра всё равно доступна офлайн.'));
      window.addEventListener('offline', () => this.toast('Офлайн-режим: партия сохранена в памяти устройства.'));
      document.addEventListener('visibilitychange', () => {
        if (!document.hidden) this.updateTime();
      });
    }

    createDeck() {
      const deck = [];
      for (const suit of SUITS) {
        for (let rank = 1; rank <= 13; rank += 1) {
          deck.push({ id: `${suit}${rank}`, suit, rank, faceUp: false });
        }
      }
      for (let i = deck.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
      return deck;
    }

    newGame() {
      const deck = this.createDeck();
      const tableau = Array.from({ length: 7 }, () => []);
      for (let column = 0; column < 7; column += 1) {
        for (let row = 0; row <= column; row += 1) {
          const card = deck.pop();
          card.faceUp = row === column;
          tableau[column].push(card);
        }
      }
      deck.forEach(card => { card.faceUp = false; });
      this.state = {
        stock: deck,
        waste: [],
        tableau,
        foundations: { S: [], H: [], D: [], C: [] },
        moves: 0,
        redeals: 2,
        status: 'playing',
        startedAt: Date.now(),
        finishedElapsed: null
      };
      this.history = [];
      this.selected = null;
      this.initialLayout = this.snapshot();
      this.dealAnimation = true;
      this.closeEndDialog();
      this.render();
      this.showMessage('Новая раздача готова');
      this.playSound('new');
      window.setTimeout(() => { this.dealAnimation = false; }, 850);
    }

    restartGame() {
      if (!this.initialLayout) return;
      this.state = clone(this.initialLayout);
      this.state.moves = 0;
      this.state.status = 'playing';
      this.state.startedAt = Date.now();
      this.state.finishedElapsed = null;
      this.history = [];
      this.selected = null;
      this.dealAnimation = true;
      this.closeEndDialog();
      this.render();
      this.showMessage('Исходная раздача восстановлена');
      this.playSound('new');
      window.setTimeout(() => { this.dealAnimation = false; }, 850);
    }

    snapshot() {
      return clone(this.state);
    }

    pushHistory() {
      this.history.push(this.snapshot());
      if (this.history.length > 150) this.history.shift();
    }

    undo() {
      if (!this.history.length) {
        this.showMessage('Отменять пока нечего');
        return;
      }
      const previous = this.history.pop();
      const startedAt = this.state.startedAt;
      this.state = previous;
      this.state.startedAt = startedAt;
      this.state.status = 'playing';
      this.state.finishedElapsed = null;
      this.selected = null;
      this.closeEndDialog();
      this.render();
      this.showMessage('Ход отменён');
      this.playSound('undo');
    }

    drawFromStock() {
      if (this.state.status !== 'playing') return;
      if (this.state.stock.length) {
        this.pushHistory();
        const card = this.state.stock.pop();
        card.faceUp = true;
        this.state.waste.push(card);
        this.state.moves += 1;
        this.selected = null;
        this.playSound('flip');
        this.render();
        this.checkGameStatus();
        return;
      }
      if (this.state.waste.length && this.state.redeals > 0) {
        this.pushHistory();
        this.state.stock = this.state.waste.reverse().map(card => ({ ...card, faceUp: false }));
        this.state.waste = [];
        this.state.redeals -= 1;
        this.state.moves += 1;
        this.selected = null;
        this.playSound('shuffle');
        this.render();
        this.showMessage(`Колода пересобрана. Осталось пересдач: ${this.state.redeals}`);
        this.checkGameStatus();
        return;
      }
      this.showMessage(this.state.waste.length ? 'Пересдачи закончились' : 'Колода пуста');
      this.checkGameStatus();
    }

    getCard(source) {
      if (!source) return null;
      if (source.type === 'waste') return this.state.waste[source.cardIndex] || null;
      if (source.type === 'foundation') return this.state.foundations[source.index]?.[source.cardIndex] || null;
      if (source.type === 'tableau') return this.state.tableau[source.index]?.[source.cardIndex] || null;
      return null;
    }

    isValidSequence(cards) {
      if (!cards.length || cards.some(card => !card.faceUp)) return false;
      for (let i = 0; i < cards.length - 1; i += 1) {
        if (cards[i].rank !== cards[i + 1].rank + 1) return false;
        if (isRed(cards[i].suit) === isRed(cards[i + 1].suit)) return false;
      }
      return true;
    }

    isMovableSource(source) {
      const card = this.getCard(source);
      if (!card || !card.faceUp) return false;
      if (source.type === 'waste') return source.cardIndex === this.state.waste.length - 1;
      if (source.type === 'foundation') return source.cardIndex === this.state.foundations[source.index].length - 1;
      if (source.type === 'tableau') {
        return this.isValidSequence(this.state.tableau[source.index].slice(source.cardIndex));
      }
      return false;
    }

    getMovingCards(source) {
      if (!this.isMovableSource(source)) return [];
      if (source.type === 'tableau') return this.state.tableau[source.index].slice(source.cardIndex);
      return [this.getCard(source)];
    }

    canMoveToTableau(card, destinationIndex) {
      const target = this.state.tableau[destinationIndex];
      if (!target.length) return card.rank === 13;
      const top = target[target.length - 1];
      return top.faceUp && top.rank === card.rank + 1 && isRed(top.suit) !== isRed(card.suit);
    }

    canMoveToFoundation(card, suit) {
      if (card.suit !== suit) return false;
      const target = this.state.foundations[suit];
      return card.rank === target.length + 1;
    }

    tryMove(source, destination, quiet = false) {
      if (this.state.status !== 'playing') return false;
      if (!this.isMovableSource(source)) {
        this.clearSelection();
        return false;
      }
      if (source.type === destination.type && source.index === destination.index) {
        this.clearSelection();
        return false;
      }
      const moving = this.getMovingCards(source);
      if (!moving.length) return false;
      const lead = moving[0];
      let valid = false;
      if (destination.type === 'tableau') valid = this.canMoveToTableau(lead, destination.index);
      if (destination.type === 'foundation') valid = moving.length === 1 && this.canMoveToFoundation(lead, destination.index);
      if (!valid) {
        if (!quiet) this.showMessage('Сюда эту карту положить нельзя');
        return false;
      }

      this.pushHistory();
      let moved;
      if (source.type === 'tableau') moved = this.state.tableau[source.index].splice(source.cardIndex);
      else if (source.type === 'waste') moved = [this.state.waste.pop()];
      else moved = [this.state.foundations[source.index].pop()];

      if (destination.type === 'tableau') this.state.tableau[destination.index].push(...moved);
      else this.state.foundations[destination.index].push(moved[0]);

      if (source.type === 'tableau') this.flipExposedCard(source.index);
      this.state.moves += 1;
      this.selected = null;
      this.playSound(destination.type === 'foundation' ? 'foundation' : 'move');
      this.render();
      this.checkGameStatus();
      return true;
    }

    flipExposedCard(columnIndex) {
      const pile = this.state.tableau[columnIndex];
      const top = pile[pile.length - 1];
      if (top && !top.faceUp) top.faceUp = true;
    }

    autoMoveToFoundation(source) {
      if (!this.isMovableSource(source)) return;
      const moving = this.getMovingCards(source);
      if (moving.length !== 1) return;
      const card = moving[0];
      if (!this.tryMove(source, { type: 'foundation', index: card.suit }, true)) {
        this.showMessage('До основания карта пока не дотягивается');
      }
    }

    handleCardClick(source) {
      if (this.dragging || this.state.status !== 'playing') return;
      const card = this.getCard(source);
      if (!card?.faceUp) return;

      if (this.selected) {
        if (this.sameSource(this.selected, source)) {
          this.clearSelection();
          return;
        }
        if (source.type === 'tableau' && this.tryMove(this.selected, { type: 'tableau', index: source.index }, true)) return;
        if (source.type === 'foundation' && this.tryMove(this.selected, { type: 'foundation', index: source.index }, true)) return;
      }

      if (this.isMovableSource(source)) {
        this.selected = { ...source };
        this.render();
        this.showMessage(`${this.describeCard(card)} выбрана`);
      } else {
        this.showMessage('Эта часть стопки пока не перемещается');
      }
    }

    sameSource(a, b) {
      return a && b && a.type === b.type && a.index === b.index && a.cardIndex === b.cardIndex;
    }

    clearSelection() {
      if (!this.selected) return;
      this.selected = null;
      this.render();
    }

    findHint(includeStock = true) {
      const candidates = [];

      // 1. Moves that expose a hidden card.
      this.state.tableau.forEach((pile, sourceIndex) => {
        const firstFaceUp = pile.findIndex(card => card.faceUp);
        if (firstFaceUp <= 0) return;
        const source = { type: 'tableau', index: sourceIndex, cardIndex: firstFaceUp };
        const card = pile[firstFaceUp];
        for (let destinationIndex = 0; destinationIndex < 7; destinationIndex += 1) {
          if (destinationIndex !== sourceIndex && this.canMoveToTableau(card, destinationIndex)) {
            candidates.push({ priority: 1, source, destination: { type: 'tableau', index: destinationIndex }, message: `Откройте закрытую карту: перенесите ${this.describeCard(card)} в столбец ${destinationIndex + 1}.` });
          }
        }
      });

      // 2. Waste to foundation.
      if (this.state.waste.length) {
        const cardIndex = this.state.waste.length - 1;
        const card = this.state.waste[cardIndex];
        if (this.canMoveToFoundation(card, card.suit)) {
          candidates.push({ priority: 2, source: { type: 'waste', index: 0, cardIndex }, destination: { type: 'foundation', index: card.suit }, message: `Отправьте ${this.describeCard(card)} из сброса в основание.` });
        }
      }

      // 3. Tableau top to foundation.
      this.state.tableau.forEach((pile, index) => {
        if (!pile.length) return;
        const cardIndex = pile.length - 1;
        const card = pile[cardIndex];
        if (card.faceUp && this.canMoveToFoundation(card, card.suit)) {
          candidates.push({ priority: 3, source: { type: 'tableau', index, cardIndex }, destination: { type: 'foundation', index: card.suit }, message: `Поднимите ${this.describeCard(card)} в основание.` });
        }
      });

      // 4. Waste to tableau.
      if (this.state.waste.length) {
        const cardIndex = this.state.waste.length - 1;
        const card = this.state.waste[cardIndex];
        for (let destinationIndex = 0; destinationIndex < 7; destinationIndex += 1) {
          if (this.canMoveToTableau(card, destinationIndex)) {
            candidates.push({ priority: 4, source: { type: 'waste', index: 0, cardIndex }, destination: { type: 'tableau', index: destinationIndex }, message: `Перенесите ${this.describeCard(card)} из сброса в столбец ${destinationIndex + 1}.` });
          }
        }
      }

      // 5. Any useful tableau-to-tableau stack move.
      this.state.tableau.forEach((pile, sourceIndex) => {
        pile.forEach((card, cardIndex) => {
          const source = { type: 'tableau', index: sourceIndex, cardIndex };
          if (!this.isMovableSource(source)) return;
          for (let destinationIndex = 0; destinationIndex < 7; destinationIndex += 1) {
            if (destinationIndex === sourceIndex || !this.canMoveToTableau(card, destinationIndex)) continue;
            const target = this.state.tableau[destinationIndex];
            const pointlessEmptyShift = !target.length && cardIndex === 0 && pile.every(item => item.faceUp);
            if (!pointlessEmptyShift) {
              candidates.push({ priority: 5, source, destination: { type: 'tableau', index: destinationIndex }, message: `Соберите цепочку: ${this.describeCard(card)} → столбец ${destinationIndex + 1}.` });
            }
          }
        });
      });

      candidates.sort((a, b) => a.priority - b.priority);
      if (candidates.length) return candidates[0];
      if (includeStock && (this.state.stock.length || (this.state.waste.length && this.state.redeals > 0))) {
        return { priority: 9, source: { type: 'stock', index: 0 }, destination: { type: 'stock', index: 0 }, message: this.state.stock.length ? 'Откройте следующую карту из колоды.' : 'Пересоберите колоду из сброса.' };
      }
      return null;
    }

    showHint() {
      if (this.state.status !== 'playing') return;
      this.clearHint();
      const hint = this.findHint(true);
      if (!hint) {
        this.showMessage('Полезных ходов больше нет');
        this.checkGameStatus();
        return;
      }
      const sourceEl = hint.source.type === 'stock'
        ? this.els.stock
        : document.querySelector(`[data-card-id="${CSS.escape(this.getCard(hint.source)?.id || '')}"]`);
      const targetEl = this.getPileElement(hint.destination);
      sourceEl?.classList.add(hint.source.type === 'stock' ? 'hint-target' : 'hint-source');
      targetEl?.classList.add('hint-target');
      this.showMessage(hint.message, 3600);
      this.playSound('hint');
      this.hintTimer = window.setTimeout(() => this.clearHint(), 2200);
    }

    clearHint() {
      if (this.hintTimer) window.clearTimeout(this.hintTimer);
      this.hintTimer = null;
      $$('.hint-source, .hint-target').forEach(el => el.classList.remove('hint-source', 'hint-target'));
    }

    getPileElement(location) {
      if (!location) return null;
      if (location.type === 'stock') return this.els.stock;
      if (location.type === 'waste') return this.els.waste;
      if (location.type === 'foundation') return $(`#foundation-${location.index}`);
      if (location.type === 'tableau') return $(`.tableau-pile[data-index="${location.index}"]`);
      return null;
    }

    checkGameStatus() {
      const foundationCount = SUITS.reduce((sum, suit) => sum + this.state.foundations[suit].length, 0);
      if (foundationCount === 52) {
        this.finishGame(true);
        return;
      }
      const noStockAction = !this.state.stock.length && (!this.state.waste.length || this.state.redeals === 0);
      if (noStockAction && !this.findHint(false)) this.finishGame(false);
    }

    finishGame(won) {
      if (this.state.status !== 'playing') return;
      this.state.status = won ? 'won' : 'lost';
      this.state.finishedElapsed = Math.floor((Date.now() - this.state.startedAt) / 1000);
      this.selected = null;
      if (won && (!this.best || this.state.moves < this.best)) {
        this.best = this.state.moves;
        localStorage.setItem(STORAGE.best, String(this.best));
      }
      this.render();
      this.els.endTitle.textContent = won ? 'You won' : 'Game over';
      this.els.endEmblem.textContent = won ? '🏆' : THEMES[this.themeId].banner;
      this.els.endText.textContent = won
        ? (this.state.moves === this.best ? 'Новый рекорд! Все четыре основания собраны.' : 'Все карты аккуратно разложены по основаниям.')
        : 'Доступные пересдачи и полезные ходы закончились.';
      this.els.endMoves.textContent = this.state.moves;
      this.els.endTime.textContent = this.formatTime(this.state.finishedElapsed);
      this.openDialog(this.els.endDialog);
      this.playSound(won ? 'win' : 'loss');
      if (won) this.launchConfetti();
    }

    closeEndDialog() {
      if (this.els.endDialog.open) this.els.endDialog.close();
    }

    render() {
      this.clearHint();
      this.renderStats();
      this.renderStock();
      this.renderWaste();
      this.renderFoundations();
      this.renderTableau();
      $('#undoBtn').disabled = !this.history.length;
      $('#hintBtn').disabled = this.state.status !== 'playing';
      this.els.stock.classList.toggle('empty', !this.state.stock.length);
      this.els.statusText.textContent = this.statusLine();
    }

    renderStats() {
      this.els.moves.textContent = this.state.moves;
      this.els.best.textContent = this.best || '—';
      this.els.redeals.textContent = this.state.redeals;
      this.updateTime();
    }

    renderStock() {
      this.els.stock.replaceChildren();
      if (!this.state.stock.length) return;
      const amount = Math.min(3, this.state.stock.length);
      for (let i = 0; i < amount; i += 1) {
        const card = this.createCardElement({ id: `stock-${i}`, suit: 'S', rank: 0, faceUp: false }, null, false);
        card.style.transform = `translate(${-i * 2}px, ${-i}px)`;
        card.style.zIndex = String(i + 1);
        card.setAttribute('aria-hidden', 'true');
        this.els.stock.append(card);
      }
    }

    renderWaste() {
      this.els.waste.replaceChildren();
      if (!this.state.waste.length) return;
      const start = Math.max(0, this.state.waste.length - 3);
      for (let index = start; index < this.state.waste.length; index += 1) {
        const source = { type: 'waste', index: 0, cardIndex: index };
        const top = index === this.state.waste.length - 1;
        const card = this.createCardElement(this.state.waste[index], source, top);
        card.style.left = `calc(${index - start} * var(--card-w) * .035)`;
        card.style.zIndex = String(index - start + 1);
        if (!top) card.setAttribute('aria-hidden', 'true');
        this.els.waste.append(card);
      }
    }

    renderFoundations() {
      for (const suit of SUITS) {
        const pile = this.state.foundations[suit];
        const element = $(`#foundation-${suit}`);
        element.dataset.symbol = THEMES[this.themeId].suits[suit];
        element.replaceChildren();
        if (!pile.length) continue;
        const cardIndex = pile.length - 1;
        const source = { type: 'foundation', index: suit, cardIndex };
        element.append(this.createCardElement(pile[cardIndex], source, true));
      }
    }

    renderTableau() {
      $$('.tableau-pile').forEach((element, pileIndex) => {
        element.replaceChildren();
        const pile = this.state.tableau[pileIndex];
        let downCount = 0;
        let upCount = 0;
        pile.forEach((card, cardIndex) => {
          const source = { type: 'tableau', index: pileIndex, cardIndex };
          const cardEl = this.createCardElement(card, source, card.faceUp);
          cardEl.style.top = `calc(var(--stack-down) * ${downCount} + var(--stack-up) * ${upCount})`;
          cardEl.style.zIndex = String(cardIndex + 1);
          if (this.dealAnimation) {
            cardEl.classList.add('dealing');
            cardEl.style.animationDelay = `${Math.min(420, (pileIndex * 45) + (cardIndex * 28))}ms`;
          }
          element.append(cardEl);
          if (card.faceUp) upCount += 1;
          else downCount += 1;
        });
      });
    }

    createCardElement(card, source, interactive) {
      const element = document.createElement('div');
      element.className = `card ${card.faceUp ? 'face-up' : 'face-down'}`;
      if (card.faceUp && isRed(card.suit)) element.classList.add('red');
      if (source && this.sameSource(this.selected, source)) element.classList.add('selected');
      element.dataset.cardId = card.id;

      if (!card.faceUp) {
        const mark = document.createElement('span');
        mark.className = 'back-mark';
        mark.textContent = THEMES[this.themeId].backIcon;
        element.append(mark);
        return element;
      }

      const glyph = THEMES[this.themeId].suits[card.suit];
      const rankLabel = this.rankLabel(card.rank);
      element.innerHTML = `
        <span class="card-corner top"><span class="card-rank">${rankLabel}</span><span class="card-suit">${glyph}</span></span>
        <span class="card-corner bottom"><span class="card-rank">${rankLabel}</span><span class="card-suit">${glyph}</span></span>
        <span class="card-center">${this.cardCenterMarkup(card, glyph)}</span>`;
      element.setAttribute('role', 'button');
      element.setAttribute('tabindex', interactive ? '0' : '-1');
      element.setAttribute('aria-label', this.describeCard(card));

      if (source && interactive) {
        element.addEventListener('click', event => {
          event.stopPropagation();
          this.handleCardClick(source);
        });
        element.addEventListener('dblclick', event => {
          event.stopPropagation();
          this.autoMoveToFoundation(source);
        });
        element.addEventListener('keydown', event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.handleCardClick(source);
          }
        });
        const movable = this.isMovableSource(source);
        element.draggable = this.pointerFine && movable;
        if (element.draggable) {
          element.addEventListener('dragstart', event => {
            this.dragging = true;
            this.selected = { ...source };
            element.classList.add('dragging');
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('application/json', JSON.stringify(source));
          });
          element.addEventListener('dragend', () => {
            this.dragging = false;
            element.classList.remove('dragging');
            $$('.drop-ready').forEach(item => item.classList.remove('drop-ready'));
          });
        }
      }
      return element;
    }

    cardCenterMarkup(card, glyph) {
      if (card.rank === 1) return `<span class="ace">${glyph}</span>`;
      if (card.rank >= 11) {
        const [icon, name] = THEMES[this.themeId].courts[card.rank];
        return `<span class="court-frame"><span class="court-icon">${icon}</span><span class="court-name">${name}</span></span>`;
      }
      return `<span class="number-glyph">${glyph}</span><span class="count">${card.rank}</span>`;
    }

    rankLabel(rank) {
      if (rank === 1) return 'A';
      if (rank === 11) return 'J';
      if (rank === 12) return 'Q';
      if (rank === 13) return 'K';
      return String(rank);
    }

    describeCard(card) {
      const rank = RANK_NAMES[card.rank] || card.rank;
      return `${rank} — ${SUIT_NAMES[card.suit]}`;
    }

    statusLine() {
      if (this.state.status === 'won') return 'You won — все карты собраны.';
      if (this.state.status === 'lost') return 'Game over — полезных ходов больше нет.';
      const foundationCount = SUITS.reduce((sum, suit) => sum + this.state.foundations[suit].length, 0);
      return `${THEMES[this.themeId].story} В основаниях: ${foundationCount}/52.`;
    }

    buildThemeGrid() {
      this.els.themeGrid.replaceChildren();
      Object.entries(THEMES).forEach(([id, theme]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = `theme-choice ${id === 'default' ? 'default-preview' : ''}`;
        button.dataset.theme = id;
        if (theme.thumb) {
          const img = document.createElement('img');
          img.src = theme.thumb;
          img.alt = '';
          img.loading = 'lazy';
          button.append(img);
        }
        const copy = document.createElement('span');
        copy.className = 'theme-copy';
        copy.innerHTML = `<strong>${theme.title}</strong><span>${theme.caption}</span>`;
        const check = document.createElement('span');
        check.className = 'theme-check';
        check.textContent = '✓';
        button.append(copy, check);
        button.addEventListener('click', () => {
          this.applyTheme(id, true);
          this.els.themeDialog.close();
        });
        this.els.themeGrid.append(button);
      });
    }

    applyTheme(id, announce = true) {
      if (!THEMES[id]) return;
      this.themeId = id;
      localStorage.setItem(STORAGE.theme, id);
      document.body.dataset.theme = id;
      this.els.themeCaption.textContent = THEMES[id].caption;
      $('meta[name="theme-color"]').setAttribute('content', THEMES[id].meta);
      $$('.theme-choice').forEach(choice => choice.classList.toggle('active', choice.dataset.theme === id));
      this.buildParticles();
      if (this.state) this.render();
      if (announce) {
        this.showMessage(`Тема «${THEMES[id].title}» включена`);
        this.playSound('theme');
      }
    }

    buildParticles() {
      const container = $('#particles');
      container.replaceChildren();
      const glyphs = THEMES[this.themeId].particles;
      const count = matchMedia('(max-width:760px)').matches ? 12 : 20;
      for (let i = 0; i < count; i += 1) {
        const particle = document.createElement('span');
        particle.className = 'particle';
        particle.textContent = glyphs[i % glyphs.length];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.setProperty('--duration', `${9 + Math.random() * 12}s`);
        particle.style.setProperty('--delay', `${-Math.random() * 18}s`);
        particle.style.setProperty('--size', `${11 + Math.random() * 18}px`);
        container.append(particle);
      }
    }

    openRules() {
      const theme = THEMES[this.themeId];
      this.els.rulesTitle.textContent = `Правила — ${theme.title}`;
      const suitChips = SUITS.map(suit => `<div class="suit-chip"><b>${theme.suits[suit]}</b><small>${SUIT_NAMES[suit]}</small></div>`).join('');
      this.els.rulesContent.innerHTML = `
        <div class="rules-banner"><span class="banner-icon">${theme.banner}</span><div><strong>${theme.caption}</strong><span>${theme.story}</span></div></div>
        <h3>Символы этой темы</h3>
        <div class="suit-legend">${suitChips}</div>
        <h3>Цель</h3>
        <p>Перенесите все 52 карты в четыре основания справа вверху. Каждое основание собирается по одной масти от туза к королю.</p>
        <h3>Стол</h3>
        <ul>
          <li>На семи столбцах карты идут по убыванию и с чередованием красного и чёрного цвета.</li>
          <li>На пустой столбец можно положить только короля — в этой теме это «${theme.courts[13][1]}».</li>
          <li>Можно переносить целую открытую последовательность. После переноса верхняя закрытая карта переворачивается автоматически.</li>
          <li>Щёлкните карту, затем место назначения. На компьютере также работает перетаскивание; двойной щелчок отправляет подходящую карту в основание.</li>
        </ul>
        <h3>Колода и окончание партии</h3>
        <p>Игра использует раздачу по одной карте и две пересдачи. Победа показывает <b>You won</b>. Когда пересдачи и полезные ходы закончились, появляется <b>Game over</b>.</p>
        <p><b>Важно:</b> карты здесь никого не «бьют». Тематические персонажи и символы меняют оформление, а логика остаётся классической.</p>`;
      this.openDialog(this.els.rulesDialog);
    }

    toggleSound() {
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem(STORAGE.sound, String(this.soundEnabled));
      const button = $('#soundBtn');
      button.setAttribute('aria-pressed', String(this.soundEnabled));
      button.setAttribute('aria-label', this.soundEnabled ? 'Выключить звук' : 'Включить звук');
      $('.tool-icon', button).textContent = this.soundEnabled ? '🔊' : '🔇';
      this.showMessage(this.soundEnabled ? 'Звук включён' : 'Звук выключен');
      if (this.soundEnabled) this.playSound('theme');
    }

    playSound(kind) {
      if (!this.soundEnabled) return;
      try {
        this.audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
        const ctx = this.audioContext;
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        const now = ctx.currentTime;
        const patterns = {
          move: [[440, .035, .04]], flip: [[300, .025, .035], [420, .025, .05]], foundation: [[520, .04, .05], [700, .05, .07]],
          undo: [[420, .035, .05], [310, .035, .06]], hint: [[760, .04, .05], [920, .04, .09]], theme: [[520, .04, .05], [780, .05, .1]],
          new: [[330, .04, .05], [440, .04, .1], [660, .06, .15]], shuffle: [[180, .025, .04], [230, .025, .08], [190, .025, .12]],
          win: [[523, .09, .02], [659, .09, .13], [784, .12, .24], [1046, .18, .39]], loss: [[330, .12, .02], [247, .16, .17]]
        };
        (patterns[kind] || patterns.move).forEach(([frequency, duration, offset]) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = kind === 'loss' ? 'sawtooth' : 'sine';
          osc.frequency.setValueAtTime(frequency, now + offset);
          gain.gain.setValueAtTime(.0001, now + offset);
          gain.gain.exponentialRampToValueAtTime(.055, now + offset + .008);
          gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration);
          osc.connect(gain).connect(ctx.destination);
          osc.start(now + offset);
          osc.stop(now + offset + duration + .02);
        });
      } catch (_) { /* Sound is optional */ }
    }

    showMessage(text, duration = 2300) {
      window.clearTimeout(this.messageTimer);
      this.els.gameMessage.textContent = text;
      this.els.gameMessage.classList.add('show');
      this.messageTimer = window.setTimeout(() => this.els.gameMessage.classList.remove('show'), duration);
    }

    toast(text) {
      window.clearTimeout(this.toastTimer);
      this.els.toast.textContent = text;
      this.els.toast.classList.add('show');
      this.toastTimer = window.setTimeout(() => this.els.toast.classList.remove('show'), 3200);
    }

    startTimer() {
      window.setInterval(() => this.updateTime(), 1000);
    }

    updateTime() {
      if (!this.state) return;
      const seconds = this.state.finishedElapsed ?? Math.max(0, Math.floor((Date.now() - this.state.startedAt) / 1000));
      this.els.time.textContent = this.formatTime(seconds);
    }

    formatTime(totalSeconds) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${pad2(minutes)}:${pad2(seconds)}`;
    }

    launchConfetti() {
      const layer = document.createElement('div');
      layer.className = 'win-confetti';
      const glyphs = [...THEMES[this.themeId].particles, '🏆', '✨'];
      for (let i = 0; i < 54; i += 1) {
        const piece = document.createElement('span');
        piece.className = 'confetti-piece';
        piece.textContent = glyphs[i % glyphs.length];
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.animationDelay = `${Math.random() * .8}s`;
        piece.style.setProperty('--drift', `${-80 + Math.random() * 160}px`);
        layer.append(piece);
      }
      document.body.append(layer);
      window.setTimeout(() => layer.remove(), 4600);
    }

    openDialog(dialog) {
      document.querySelectorAll('dialog[open]').forEach(open => {
        if (open !== dialog) open.close();
      });
      if (!dialog.open) dialog.showModal();
    }

    setPlatformTab(platform) {
      $$('.platform-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.platform === platform));
      const instructions = {
        windows: `<ol><li>Откройте сайт в Microsoft Edge или Google Chrome.</li><li>Нажмите <b>«Установить в браузере»</b> ниже или значок установки в адресной строке.</li><li>Приложение появится в меню «Пуск» и может быть закреплено на панели задач.</li></ol>`,
        macos: `<ol><li>В Safari откройте меню <b>Файл → Добавить в Dock</b>; либо используйте Chrome и кнопку установки.</li><li>Подтвердите название «Косынка».</li><li>Иконка появится в Dock и Launchpad, приложение откроется отдельным окном.</li></ol>`,
        ios: `<ol><li>Откройте страницу именно в Safari.</li><li>Нажмите <b>Поделиться</b>.</li><li>Выберите <b>«На экран Домой»</b> и затем <b>«Добавить»</b>.</li></ol>`
      };
      this.els.platformInstructions.innerHTML = instructions[platform];
      this.els.nativeInstallBtn.style.display = platform === 'ios' ? 'none' : 'inline-flex';
    }

    setupInstall() {
      this.setPlatformTab('windows');
      window.addEventListener('beforeinstallprompt', event => {
        event.preventDefault();
        this.deferredInstallPrompt = event;
        this.els.nativeInstallBtn.disabled = false;
      });
      window.addEventListener('appinstalled', () => {
        this.deferredInstallPrompt = null;
        this.toast('Косынка установлена как приложение.');
      });
      const standalone = matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
      if (standalone) {
        $('#installBtn').disabled = true;
        $('#installBtn span:last-child').textContent = 'Установлено';
      }
    }

    async installPwa() {
      if (this.deferredInstallPrompt) {
        this.els.installDialog.close();
        await this.deferredInstallPrompt.prompt();
        const choice = await this.deferredInstallPrompt.userChoice;
        this.toast(choice.outcome === 'accepted' ? 'Установка запущена.' : 'Установку можно повторить позже.');
        this.deferredInstallPrompt = null;
      } else {
        this.toast('Автоустановка недоступна: используйте инструкцию для своего браузера или скачайте ZIP.');
      }
    }

    registerServiceWorker() {
      if (!('serviceWorker' in navigator)) return;
      if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').catch(() => {
          this.toast('Офлайн-кэш включится после публикации через HTTPS, например GitHub Pages.');
        });
      });
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    window.kosynkaApp = new SolitaireApp();
  });
})();
