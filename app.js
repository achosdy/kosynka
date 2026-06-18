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
      courts: {
        11: { crest: 'J', name: 'Валет', title: 'Валет', subtitle: 'классическая колода' },
        12: { crest: 'Q', name: 'Дама', title: 'Дама', subtitle: 'классическая колода' },
        13: { crest: 'K', name: 'Король', title: 'Король', subtitle: 'классическая колода' }
      },
      banner: '♠', story: 'Классическая Косынка в духе настольного сукна: строгие масти, чистые карты и спокойная анимация.'
    },
    dark: {
      title: 'Темная', caption: 'Элегантный нуар и графит', thumb: null,
      accent: '#9da6ff', meta: '#11131a', backIcon: '◆', particles: ['◆', '✦', '✧', '◈'],
      suits: { S: '♠', H: '♥', D: '♦', C: '♣' },
      courts: {
        11: { crest: 'N', name: 'Вестник', title: 'Noir Jack', subtitle: 'вестник ночи' },
        12: { crest: 'L', name: 'Леди ночи', title: 'Night Queen', subtitle: 'полуночный блеск' },
        13: { crest: 'K', name: 'Тёмный король', title: 'Obsidian King', subtitle: 'власть сумерек' }
      },
      banner: '◆', story: 'Нуарная версия Косынки: графитовый стол, холодные отблески и благородный контраст чёрного стекла.'
    },
    light: {
      title: 'Светлая', caption: 'Слоновая кость, воздух и золото', thumb: null,
      accent: '#7e6bff', meta: '#f5efe1', backIcon: '◇', particles: ['◇', '✦', '✧', '❂'],
      suits: { S: '♠', H: '♥', D: '♦', C: '♣' },
      courts: {
        11: { crest: 'A', name: 'Посланник', title: 'Aurora Jack', subtitle: 'утренний свет' },
        12: { crest: 'D', name: 'Леди рассвета', title: 'Dawn Queen', subtitle: 'золотой горизонт' },
        13: { crest: 'S', name: 'Король света', title: 'Sun King', subtitle: 'чистое сияние' }
      },
      banner: '◇', story: 'Светлая тема строится на мягких кремовых тонах, чистом воздухе и ощущении дорогой бумажной колоды.'
    },
    winx: {
      title: 'Winx', caption: 'Магия, блёстки и крылья', thumb: null,
      accent: '#ff7ee8', meta: '#7d2b9b', backIcon: '✦', particles: ['✦', '✧', '❈', '❀'],
      suits: { S: '☽', H: '♥', D: '✦', C: '❈' },
      courts: {
        11: { crest: '✦', name: 'Хранитель крыла', title: 'Sky Ward', subtitle: 'магический дозор' },
        12: { crest: '❈', name: 'Фея света', title: 'Fairy Queen', subtitle: 'искры и глянец' },
        13: { crest: '✶', name: 'Верховный хранитель', title: 'Magic King', subtitle: 'кристальная мантия' }
      },
      banner: '✦', story: 'Яркая сказочная тема с магическим сиянием, полупрозрачными орнаментами и изящными карточными рамками.'
    },
    pokemon: {
      title: 'Pokémon', caption: 'Жёлтая энергия и стихии', thumb: null,
      accent: '#ffd835', meta: '#1c78bc', backIcon: '⚡', particles: ['⚡', '✦', '◉', '✶'],
      suits: { S: '⚡', H: '✹', D: '◉', C: '✿' },
      courts: {
        11: { crest: '⚡', name: 'Тренер', title: 'Field Trainer', subtitle: 'карманная лига' },
        12: { crest: '◉', name: 'Лидер арены', title: 'Gym Master', subtitle: 'силы стихий' },
        13: { crest: '★', name: 'Чемпион', title: 'League Champ', subtitle: 'решающий бой' }
      },
      banner: '⚡', story: 'Энергичная тема в духе карточной тренерской лиги: электрические акценты, яркие значки и дух приключения.'
    },
    minecraft: {
      title: 'Minecraft', caption: 'Пиксели, блоки и мобы', thumb: null,
      accent: '#80d757', meta: '#456d32', backIcon: '▣', particles: ['■', '▣', '◆', '✦'],
      suits: { S: '⛏', H: '♥', D: '◆', C: '▣' },
      courts: {
        11: { crest: '⛏', name: 'Шахтёр', title: 'Mine Jack', subtitle: 'добыча ресурсов' },
        12: { crest: '◆', name: 'Мастер крафта', title: 'Craft Queen', subtitle: 'верстак и зелья' },
        13: { crest: '▣', name: 'Хранитель мира', title: 'Block King', subtitle: 'строитель биомов' }
      },
      banner: '▣', story: 'Квадратная тема с пиксельной пластикой, блоками, рудой и ощущением большого процедурного мира.'
    },
    halloween: {
      title: 'Halloween', caption: 'Туман, тыквы и ночные страхи', thumb: null,
      accent: '#ff8d2d', meta: '#21102f', backIcon: '☾', particles: ['☾', '✢', '✶', '✷'],
      suits: { S: '✢', H: '♥', D: '♦', C: '☾' },
      courts: {
        11: { crest: '✢', name: 'Охотник', title: 'Hunter Jack', subtitle: 'шёпот кладбища' },
        12: { crest: '☾', name: 'Ведьма', title: 'Witch Queen', subtitle: 'лунное зелье' },
        13: { crest: '✶', name: 'Властелин тьмы', title: 'Night King', subtitle: 'король тыкв' }
      },
      banner: '☾', story: 'Пугающая, но стильная тема: фиолетовое небо, резные тыквы, кривые ветви и карточный готический декор.'
    },
    christmas: {
      title: 'Christmas', caption: 'Праздник, золото и снежный свет', thumb: null,
      accent: '#e43a43', meta: '#0b6847', backIcon: '❄', particles: ['❄', '✦', '✶', '✧'],
      suits: { S: '❄', H: '♥', D: '✶', C: '❋' },
      courts: {
        11: { crest: '❄', name: 'Оленевод', title: 'Reindeer Jack', subtitle: 'северный караван' },
        12: { crest: '✶', name: 'Госпожа зимы', title: 'Winter Queen', subtitle: 'ледяное кружево' },
        13: { crest: '✦', name: 'Санта', title: 'Santa King', subtitle: 'подарки и гирлянды' }
      },
      banner: '❄', story: 'Золотисто-снежная тема с гирляндами, свечением витрин и ощущением тёплого рождественского вечера.'
    },
    formula1: {
      title: 'Formula 1', caption: 'Скорость, трассы и пит-стопы', thumb: null,
      accent: '#ff2738', meta: '#161719', backIcon: '▤', particles: ['▤', '✶', '◈', '⟐'],
      suits: { S: '▤', H: '♥', D: '◈', C: '◎' },
      courts: {
        11: { crest: '▤', name: 'Механик', title: 'Pit Jack', subtitle: 'быстрый пит-стоп' },
        12: { crest: '◈', name: 'Пилот', title: 'Pole Queen', subtitle: 'гоночный болид' },
        13: { crest: '◎', name: 'Чемпион', title: 'Grand King', subtitle: 'клетчатый флаг' }
      },
      banner: '▤', story: 'Гоночная тема с клетчатыми мотивами, резкими полосами, трассовой графикой и ощущением максимальной скорости.'
    },
    hellokitty: {
      title: 'Hello Kitty', caption: 'Нежный розовый мир и банты', thumb: null,
      accent: '#ff75b6', meta: '#e54c94', backIcon: '❀', particles: ['❀', '♥', '✦', '✿'],
      suits: { S: '❀', H: '♥', D: '✿', C: '◆' },
      courts: {
        11: { crest: '❀', name: 'Друг', title: 'Sweet Friend', subtitle: 'ласковый характер' },
        12: { crest: '♥', name: 'Китти', title: 'Kitty Queen', subtitle: 'милый бантик' },
        13: { crest: '✦', name: 'Король милоты', title: 'Cute King', subtitle: 'розовое сердце' }
      },
      banner: '❀', story: 'Милая тема в розово-жемчужной палитре: бантики, лепестки, мягкие облака и ласковый блеск поверхностей.'
    },
    pirates: {
      title: 'Pirates', caption: 'Штормовое море и сокровища', thumb: null,
      accent: '#d6a446', meta: '#184e5a', backIcon: '⚓', particles: ['⚓', '✶', '◈', '✦'],
      suits: { S: '⚓', H: '♥', D: '◈', C: '✶' },
      courts: {
        11: { crest: '⚓', name: 'Штурман', title: 'Deck Jack', subtitle: 'соль и ветер' },
        12: { crest: '◈', name: 'Квартирмейстер', title: 'Sea Queen', subtitle: 'карта рифов' },
        13: { crest: '✶', name: 'Капитан', title: 'Captain King', subtitle: 'сундук и сабля' }
      },
      banner: '⚓', story: 'Пиратская тема соединяет корабельное дерево, компасы, морскую пену и золотой отблеск сундуков.'
    },
    chernobyl: {
      title: 'Чернобыль', caption: 'Туман, радиация и руины', thumb: null,
      accent: '#c9f31d', meta: '#354323', backIcon: '☢', particles: ['☢', '⚠', '✢', '·'],
      suits: { S: '☢', H: '♥', D: '⚠', C: '✢' },
      courts: {
        11: { crest: '⚠', name: 'Сталкер', title: 'Zone Jack', subtitle: 'пустые улицы' },
        12: { crest: '✢', name: 'Инженер', title: 'Core Queen', subtitle: 'тени реактора' },
        13: { crest: '☢', name: 'Реактор', title: 'Reactor King', subtitle: 'зона отчуждения' }
      },
      banner: '☢', story: 'Мрачная постиндустриальная тема с серым небом, жёлто-зелёными акцентами и ощущением заброшенной зоны.'
    },
    mario: {
      title: 'Mario', caption: 'Платформер, кирпичики и облака', thumb: null,
      accent: '#ff4e42', meta: '#53a9ff', backIcon: '★', particles: ['★', '■', '◉', '✦'],
      suits: { S: '★', H: '♥', D: '◉', C: '■' },
      courts: {
        11: { crest: '■', name: 'Исследователь', title: 'Level Jack', subtitle: 'кирпичные блоки' },
        12: { crest: '♥', name: 'Принцесса', title: 'Castle Queen', subtitle: 'королевский замок' },
        13: { crest: '★', name: 'Герой платформ', title: 'Hero King', subtitle: 'монеты и трубы' }
      },
      banner: '★', story: 'Весёлая платформенная тема с небом, холмами, облаками, кирпичными блоками и энергией ретро-приключения.'
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
      if (card.rank === 1) {
        return `
          <span class="ace-scene">
            <span class="ace-ring"></span>
            <span class="ace-glyph">${glyph}</span>
            <span class="ace-ribbon">ACE</span>
          </span>`;
      }
      if (card.rank >= 11) {
        const court = THEMES[this.themeId].courts[card.rank];
        return `
          <span class="court-scene court-${this.themeId}">
            <span class="court-badge">${glyph}</span>
            <span class="court-figure-frame">${this.courtIllustrationMarkup(card.rank, glyph)}</span>
            <span class="court-titleplate">${court.name}</span>
          </span>`;
      }
      return this.numberCardMarkup(card.rank, glyph);
    }

    numberCardMarkup(rank, glyph) {
      const pips = this.getPipLayout(rank).map(pip => `
        <span class="pip ${pip.rotate ? 'flip' : ''}" style="left:${pip.x}%; top:${pip.y}%">${glyph}</span>`).join('');
      return `<span class="pip-layout">${pips}</span>`;
    }

    getPipLayout(rank) {
      const layouts = {
        2: [{ x: 50, y: 18 }, { x: 50, y: 82, rotate: true }],
        3: [{ x: 50, y: 16 }, { x: 50, y: 50 }, { x: 50, y: 84, rotate: true }],
        4: [{ x: 24, y: 19 }, { x: 76, y: 19 }, { x: 24, y: 81, rotate: true }, { x: 76, y: 81, rotate: true }],
        5: [{ x: 24, y: 19 }, { x: 76, y: 19 }, { x: 50, y: 50 }, { x: 24, y: 81, rotate: true }, { x: 76, y: 81, rotate: true }],
        6: [{ x: 24, y: 18 }, { x: 76, y: 18 }, { x: 24, y: 50 }, { x: 76, y: 50 }, { x: 24, y: 82, rotate: true }, { x: 76, y: 82, rotate: true }],
        7: [{ x: 24, y: 18 }, { x: 76, y: 18 }, { x: 50, y: 32 }, { x: 24, y: 50 }, { x: 76, y: 50 }, { x: 24, y: 82, rotate: true }, { x: 76, y: 82, rotate: true }],
        8: [{ x: 24, y: 18 }, { x: 76, y: 18 }, { x: 50, y: 18 }, { x: 24, y: 50 }, { x: 76, y: 50 }, { x: 24, y: 82, rotate: true }, { x: 76, y: 82, rotate: true }, { x: 50, y: 82, rotate: true }],
        9: [{ x: 24, y: 18 }, { x: 76, y: 18 }, { x: 50, y: 18 }, { x: 24, y: 50 }, { x: 50, y: 50 }, { x: 76, y: 50 }, { x: 24, y: 82, rotate: true }, { x: 76, y: 82, rotate: true }, { x: 50, y: 82, rotate: true }],
        10: [{ x: 24, y: 16 }, { x: 76, y: 16 }, { x: 50, y: 26 }, { x: 24, y: 38 }, { x: 76, y: 38 }, { x: 24, y: 62, rotate: true }, { x: 76, y: 62, rotate: true }, { x: 50, y: 74, rotate: true }, { x: 24, y: 84, rotate: true }, { x: 76, y: 84, rotate: true }]
      };
      return layouts[rank] || [{ x: 50, y: 50 }];
    }

    courtIllustrationMarkup(rank, glyph) {
      const cfg = this.getCourtFigureConfig(rank, glyph);
      return this.buildFigureSvg(cfg);
    }

    getCourtFigureConfig(rank, glyph) {
      const role = rank === 11 ? 'jack' : rank === 12 ? 'queen' : 'king';
      const presets = {
        default: { style: 'royal', colors: { primary: '#165b44', secondary: '#f2dec2', accent: '#d7a437', skin: '#f2c8a1', hair: '#3a312b', line: '#173329' }, prop: 'scepter' },
        dark: { style: 'royal', colors: { primary: '#23273a', secondary: '#a8b0ff', accent: '#88d6ff', skin: '#e3c0a2', hair: '#1a1a1f', line: '#141828' }, prop: 'orb' },
        light: { style: 'royal', colors: { primary: '#f5efe3', secondary: '#7f69ff', accent: '#f1c96a', skin: '#f0c8a3', hair: '#6d5b49', line: '#7568b3' }, prop: 'staff' },
        winx: { style: 'fairy', colors: { primary: '#ff71c8', secondary: '#9defff', accent: '#ffe66e', skin: '#f7c6a1', hair: '#5f2cc7', line: '#7d2b9b' }, prop: 'wand' },
        pokemon: { style: 'trainer', colors: { primary: '#ffdb34', secondary: '#2d77d4', accent: '#ff5e45', skin: '#f4c79f', hair: '#3b2d1f', line: '#29569b' }, prop: 'orb' },
        minecraft: { style: 'blocky', colors: { primary: '#7bcf53', secondary: '#4b94d6', accent: '#6b4d2a', skin: '#f2c89b', hair: '#573720', line: '#35572c' }, prop: 'pickaxe' },
        halloween: { style: 'spooky', colors: { primary: '#6d3db7', secondary: '#ff9337', accent: '#f4d88a', skin: '#e6c0a6', hair: '#1d1232', line: '#2a1538' }, prop: 'pumpkin' },
        christmas: { style: 'festive', colors: { primary: '#d93643', secondary: '#136d4b', accent: '#f4cf66', skin: '#efc7a0', hair: '#6c4d3d', line: '#0f5d41' }, prop: 'gift' },
        formula1: { style: 'racer', colors: { primary: '#ff2f40', secondary: '#2d2f36', accent: '#f2f2f2', skin: '#efc3a0', hair: '#2f2524', line: '#18191d' }, prop: 'tire' },
        hellokitty: { style: 'kawaii', colors: { primary: '#ff76b8', secondary: '#ffd7ec', accent: '#ffffff', skin: '#ffe5ee', hair: '#111111', line: '#d1498f' }, prop: 'bow' },
        pirates: { style: 'pirate', colors: { primary: '#246373', secondary: '#d6a446', accent: '#f4e1b1', skin: '#efc39d', hair: '#5a341f', line: '#17373d' }, prop: 'saber' },
        chernobyl: { style: 'stalker', colors: { primary: '#5f6d37', secondary: '#d0f145', accent: '#8d8d8d', skin: '#d5b196', hair: '#3a342d', line: '#2c331c' }, prop: 'meter' },
        mario: { style: 'plumber', colors: { primary: '#ff4e42', secondary: '#1f72cf', accent: '#ffd44f', skin: '#f3c69b', hair: '#5e3422', line: '#6f2e2b' }, prop: 'wrench' }
      };
      const cfg = JSON.parse(JSON.stringify(presets[this.themeId] || presets.default));
      cfg.role = role;
      cfg.rank = rank;
      cfg.glyph = glyph;
      cfg.line = cfg.colors.line;
      cfg.label = THEMES[this.themeId].courts[rank].name;
      if (role === 'queen') {
        cfg.colors.primary = cfg.colors.secondary;
      }
      if (role === 'king') {
        cfg.crown = true;
        cfg.colors.accent = cfg.colors.accent || '#e3bf58';
      }
      return cfg;
    }

    buildFigureSvg(cfg) {
      const body = {
        royal: this.buildRoyalFigure(cfg),
        fairy: this.buildFairyFigure(cfg),
        trainer: this.buildTrainerFigure(cfg),
        blocky: this.buildBlockFigure(cfg),
        spooky: this.buildSpookyFigure(cfg),
        festive: this.buildFestiveFigure(cfg),
        racer: this.buildRacerFigure(cfg),
        kawaii: this.buildKawaiiFigure(cfg),
        pirate: this.buildPirateFigure(cfg),
        stalker: this.buildStalkerFigure(cfg),
        plumber: this.buildPlumberFigure(cfg)
      }[cfg.style] || this.buildRoyalFigure(cfg);
      const { primary, secondary, accent, line } = cfg.colors;
      return `
        <svg class="court-svg" viewBox="0 0 220 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="bg-${cfg.style}-${cfg.role}" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="${secondary}" stop-opacity="0.42"/>
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
            </linearGradient>
          </defs>
          <rect x="8" y="8" width="204" height="264" rx="28" fill="url(#bg-${cfg.style}-${cfg.role})" opacity="0.88"/>
          <circle cx="110" cy="84" r="58" fill="${accent}" opacity="0.18"/>
          <path d="M44 228 Q110 182 176 228" fill="${primary}" opacity="0.12"/>
          <g fill="${line}" opacity="0.08">
            <circle cx="42" cy="44" r="5"/><circle cx="178" cy="44" r="5"/><circle cx="42" cy="236" r="5"/><circle cx="178" cy="236" r="5"/>
          </g>
          ${body}
          <text x="110" y="258" text-anchor="middle" font-size="16" font-weight="800" letter-spacing="1.2" fill="${line}" opacity="0.72">${cfg.label.toUpperCase()}</text>
        </svg>`;
    }

    buildRoyalFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      const crown = cfg.role === 'king' ? `<path d="M72 56 L88 34 L108 56 L128 30 L148 56 L148 70 L72 70 Z" fill="${accent}" stroke="${line}" stroke-width="4"/>` : '';
      const headWear = cfg.role === 'queen'
        ? `<path d="M76 58 Q110 34 144 58 L134 74 Q110 62 86 74 Z" fill="${accent}" opacity="0.65"/>`
        : `<path d="M78 60 Q110 42 142 60" stroke="${accent}" stroke-width="8" stroke-linecap="round"/>`;
      const prop = cfg.prop === 'orb'
        ? `<circle cx="164" cy="158" r="16" fill="${accent}" opacity="0.8" stroke="${line}" stroke-width="4"/><line x1="154" y1="174" x2="140" y2="210" stroke="${line}" stroke-width="5"/>`
        : `<line x1="158" y1="126" x2="164" y2="214" stroke="${accent}" stroke-width="7"/><circle cx="158" cy="120" r="12" fill="${accent}" stroke="${line}" stroke-width="4"/>`;
      return `
        ${crown}
        ${headWear}
        <circle cx="110" cy="84" r="24" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <path d="M84 84 Q110 42 136 84" fill="${hair}"/>
        <path d="M86 110 Q110 94 134 110 L146 190 Q110 220 74 190 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M78 142 Q110 126 142 142" stroke="${secondary}" stroke-width="8" stroke-linecap="round" opacity="0.7"/>
        <path d="M88 190 L82 238 M132 190 L138 238" stroke="${line}" stroke-width="8" stroke-linecap="round"/>
        <path d="M76 132 L56 176 M144 132 L164 176" stroke="${line}" stroke-width="8" stroke-linecap="round"/>
        ${prop}`;
    }

    buildFairyFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <ellipse cx="66" cy="136" rx="30" ry="48" fill="${secondary}" opacity="0.48" transform="rotate(-20 66 136)"/>
        <ellipse cx="154" cy="136" rx="30" ry="48" fill="${secondary}" opacity="0.48" transform="rotate(20 154 136)"/>
        <circle cx="110" cy="84" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <path d="M84 80 Q110 34 136 80 Q130 72 110 70 Q92 70 84 80 Z" fill="${hair}"/>
        <path d="M88 110 Q110 96 132 110 L140 188 Q110 210 80 188 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M92 110 L110 150 L128 110" fill="${accent}" opacity="0.55"/>
        <path d="M86 190 L82 236 M134 190 L138 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M84 128 L56 162 M136 128 L164 162" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <line x1="154" y1="126" x2="182" y2="90" stroke="${accent}" stroke-width="6"/>
        <circle cx="186" cy="86" r="8" fill="${accent}"/>
        <circle cx="186" cy="86" r="16" fill="none" stroke="${secondary}" stroke-width="3" opacity="0.5"/>`;
    }

    buildTrainerFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <path d="M84 62 H136 L128 82 H92 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <circle cx="110" cy="88" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <path d="M88 86 Q110 52 132 86" fill="${hair}"/>
        <path d="M82 112 H138 L148 192 Q110 214 72 192 Z" fill="${secondary}" stroke="${line}" stroke-width="4"/>
        <path d="M82 112 H138 V136 H82 Z" fill="${primary}"/>
        <path d="M82 136 H138" stroke="#ffffff" stroke-width="7"/>
        <path d="M86 192 L82 238 M134 192 L138 238" stroke="${line}" stroke-width="8" stroke-linecap="round"/>
        <path d="M82 130 L54 156 M138 130 L166 156" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <circle cx="168" cy="160" r="18" fill="#ffffff" stroke="${line}" stroke-width="4"/>
        <path d="M150 160 H186" stroke="${line}" stroke-width="4"/><path d="M168 142 V178" stroke="${line}" stroke-width="4"/><circle cx="168" cy="160" r="8" fill="${accent}"/>`;
    }

    buildBlockFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <rect x="88" y="56" width="44" height="44" rx="4" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <rect x="88" y="56" width="44" height="18" fill="${hair}"/>
        <rect x="82" y="108" width="56" height="64" rx="4" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <rect x="82" y="140" width="56" height="16" fill="${secondary}" opacity="0.5"/>
        <rect x="62" y="118" width="20" height="58" rx="4" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <rect x="138" y="118" width="20" height="58" rx="4" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <rect x="86" y="172" width="18" height="54" rx="4" fill="${accent}" stroke="${line}" stroke-width="4"/>
        <rect x="116" y="172" width="18" height="54" rx="4" fill="${accent}" stroke="${line}" stroke-width="4"/>
        <path d="M154 126 L182 112 L174 138 L192 146 L164 160 Z" fill="${accent}" stroke="${line}" stroke-width="4"/>`;
    }

    buildSpookyFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      if (cfg.role === 'king') {
        return `
          <circle cx="110" cy="82" r="22" fill="#f6f2e8" stroke="${line}" stroke-width="4"/>
          <circle cx="102" cy="80" r="3" fill="${line}"/><circle cx="118" cy="80" r="3" fill="${line}"/>
          <path d="M90 112 Q110 96 130 112 L144 188 Q110 214 76 188 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
          <path d="M78 188 Q110 170 142 188" stroke="${secondary}" stroke-width="6" stroke-dasharray="4 6"/>
          <path d="M82 132 L54 160 M138 132 L166 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
          <path d="M88 188 L84 236 M132 188 L136 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
          <circle cx="164" cy="146" r="16" fill="${accent}" stroke="${line}" stroke-width="4"/><path d="M156 146 H172 M164 138 V154" stroke="${line}" stroke-width="3"/>`;
      }
      return `
        <path d="M76 60 Q110 36 144 60 Q138 78 110 78 Q82 78 76 60 Z" fill="${hair}"/>
        <circle cx="110" cy="86" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <path d="M84 112 Q110 92 136 112 L144 188 Q110 212 76 188 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M78 120 Q110 140 142 120" stroke="${secondary}" stroke-width="7" opacity="0.7"/>
        <path d="M84 132 L58 166 M136 132 L162 166" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M88 188 L82 236 M132 188 L138 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <circle cx="168" cy="162" r="18" fill="${accent}" stroke="${line}" stroke-width="4"/>
        <path d="M156 170 Q168 146 180 170" fill="${line}" opacity="0.55"/>`;
    }

    buildFestiveFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      const beard = cfg.role === 'king' ? `<path d="M90 96 Q110 128 130 96 Q132 128 110 142 Q88 128 90 96 Z" fill="#ffffff" stroke="${line}" stroke-width="3"/>` : '';
      return `
        <path d="M76 60 H144 L132 78 H88 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <circle cx="110" cy="86" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        ${beard}
        <path d="M84 112 Q110 94 136 112 L144 190 Q110 214 76 190 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M90 124 H130" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
        <path d="M84 132 L56 160 M136 132 L164 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M90 190 L84 236 M130 190 L136 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <rect x="152" y="150" width="30" height="26" rx="4" fill="${accent}" stroke="${line}" stroke-width="4"/>
        <path d="M167 150 V176 M152 163 H182" stroke="${primary}" stroke-width="4"/><path d="M160 148 Q167 138 174 148" stroke="${primary}" stroke-width="4" fill="none"/>`;
    }

    buildRacerFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <circle cx="110" cy="86" r="24" fill="${secondary}" stroke="${line}" stroke-width="4"/>
        <path d="M94 82 H126" stroke="#ffffff" stroke-width="10" stroke-linecap="round"/>
        <path d="M82 112 Q110 96 138 112 L146 190 Q110 212 74 190 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M82 132 H138" stroke="#ffffff" stroke-width="7"/>
        <path d="M82 132 L56 160 M138 132 L164 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M90 190 L84 236 M130 190 L136 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <circle cx="168" cy="166" r="18" fill="#1d1f25" stroke="${line}" stroke-width="4"/>
        <circle cx="168" cy="166" r="8" fill="${accent}"/>`;
    }

    buildKawaiiFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <circle cx="110" cy="88" r="30" fill="#fffafc" stroke="${line}" stroke-width="4"/>
        <path d="M84 66 L98 42 L108 66 Z M112 66 L122 42 L136 66 Z" fill="#fffafc" stroke="${line}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="99" cy="88" r="3" fill="${line}"/><circle cx="121" cy="88" r="3" fill="${line}"/>
        <ellipse cx="110" cy="98" rx="4" ry="3" fill="#f2c34b"/>
        <path d="M90 84 H80 M140 84 H130 M90 100 H80 M140 100 H130" stroke="${line}" stroke-width="3" stroke-linecap="round"/>
        <path d="M120 54 Q136 40 150 54 Q142 72 124 68 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M86 122 Q110 108 134 122 L142 190 Q110 212 78 190 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M84 132 L60 160 M136 132 L160 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M92 190 L86 236 M128 190 L134 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <circle cx="110" cy="144" r="10" fill="${accent}" opacity="0.75"/>`;
    }

    buildPirateFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      const hat = `<path d="M70 62 Q110 28 150 62 L140 82 H80 Z" fill="#151515" stroke="${line}" stroke-width="4"/><path d="M66 82 H154" stroke="${secondary}" stroke-width="6" stroke-linecap="round"/>`;
      const eye = cfg.role === 'jack' ? `<rect x="94" y="82" width="18" height="10" fill="#151515" rx="4"/>` : '';
      return `
        ${hat}
        <circle cx="110" cy="88" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        ${eye}
        <path d="M84 112 Q110 96 136 112 L144 190 Q110 214 76 190 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M90 126 Q110 118 130 126" stroke="${secondary}" stroke-width="8" stroke-linecap="round"/>
        <path d="M84 132 L58 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M136 132 L156 156" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M90 190 L84 236 M130 190 L136 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M156 166 L184 142" stroke="${accent}" stroke-width="5" stroke-linecap="round"/><path d="M182 140 L190 152 L174 156 Z" fill="${accent}"/>`;
    }

    buildStalkerFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <path d="M80 58 Q110 38 140 58 L134 78 Q110 70 86 78 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <circle cx="110" cy="88" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <circle cx="102" cy="88" r="4" fill="${line}"/><circle cx="118" cy="88" r="4" fill="${line}"/>
        <path d="M84 112 Q110 96 136 112 L146 192 Q110 216 74 192 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <rect x="92" y="132" width="36" height="18" rx="4" fill="${secondary}" opacity="0.6"/>
        <path d="M84 132 L58 160 M136 132 L162 160" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M92 192 L86 236 M128 192 L134 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <rect x="154" y="150" width="24" height="34" rx="4" fill="#2d3125" stroke="${line}" stroke-width="4"/><path d="M166 150 V184" stroke="${secondary}" stroke-width="4"/><circle cx="166" cy="166" r="4" fill="${accent}"/>`;
    }

    buildPlumberFigure(cfg) {
      const { primary, secondary, accent, skin, hair, line } = cfg.colors;
      return `
        <path d="M80 60 H140 L134 78 H86 Z" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <circle cx="110" cy="88" r="22" fill="${skin}" stroke="${line}" stroke-width="4"/>
        <path d="M96 98 Q110 112 124 98" stroke="${hair}" stroke-width="5" stroke-linecap="round"/>
        <path d="M84 112 Q110 96 136 112 L146 192 Q110 214 74 192 Z" fill="${secondary}" stroke="${line}" stroke-width="4"/>
        <rect x="94" y="124" width="32" height="58" rx="6" fill="${primary}" stroke="${line}" stroke-width="4"/>
        <path d="M84 132 L58 158 M136 132 L162 158" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M92 192 L86 236 M128 192 L134 236" stroke="${line}" stroke-width="7" stroke-linecap="round"/>
        <path d="M154 164 C164 144 180 144 188 156 C180 168 164 172 154 164 Z" fill="${accent}" stroke="${line}" stroke-width="4"/>
        <circle cx="154" cy="164" r="3" fill="${line}"/>`;
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
        button.className = 'theme-choice';
        button.dataset.theme = id;

        const preview = document.createElement('span');
        preview.className = 'theme-preview';
        preview.innerHTML = `<span class="theme-preview-glyph">${theme.banner}</span><span class="theme-preview-mark">${theme.backIcon}</span>`;

        const copy = document.createElement('span');
        copy.className = 'theme-copy';
        copy.innerHTML = `<strong>${theme.title}</strong><span>${theme.caption}</span>`;
        const check = document.createElement('span');
        check.className = 'theme-check';
        check.textContent = '✓';
        button.append(preview, copy, check);
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
          <li>На пустой столбец можно положить только короля — в этой теме это «${theme.courts[13].name}».</li>
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
