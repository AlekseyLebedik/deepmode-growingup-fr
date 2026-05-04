VERSION 1.0

| Feature                                                | Server State              | Local UI                 | Visualization        |
| ------------------------------------------------------ | ------------------------- | ------------------------ | -------------------- |
| Drag & Drop событий между днями                        | CalendarData              | DragDrop, SelectedDay    | D3Grid               |
| Импорт событий через JSON                              | CalendarData              | -                        | D3Grid               |
| Реальное время работы пользователя                     | UserProfile, CalendarData | -                        | WaterFillState       |
| WaterFill анимация загруженности                       | CalendarData, MinMax      | WaterFillState           | D3Grid               |
| Прокачка профиля (очки дисциплины, силы, выносливости) | UserProfile               | GoalProgressBars         | UIComponents         |
| Постепенное увеличение целей                           | Goals                     | GoalProgressBars         | UIComponents         |
| Меняемые темы / скины                                  | AvailableThemes           | ActiveTheme              | UIComponents, D3Grid |
| Отмена задач с записью причины                         | EventLogs                 | ModalState               | UIComponents         |
| Мин/Макс время задачи                                  | MinMax                    | MinMaxUI                 | D3Grid, UIComponents |
| Награды / ачивки                                       | UserProfile               | GoalProgressBars         | UIComponents         |
| Социальный компонент                                   | UserProfile               | -                        | UIComponents         |
| Рекомендации по тайм-менеджменту                       | CalendarData, UserProfile | -                        | UIComponents         |
| История прогресса                                      | CalendarData              | GoalProgressBars         | D3Grid               |
| Уведомления / напоминания                              | EventLogs                 | ModalState               | UIComponents         |
| Интерактивная визуализация прогресса                   | CalendarData, MinMax      | WaterFillState, MinMaxUI | D3Grid               |

---

# 📂 FSD + State Architecture for Procrastination Calendar App (Updated)

## 1. Схема состояния и поток данных

```mermaid
graph TD
  subgraph Apollo_Client / Server State
    User[User Profile & Skills]
    Calendar[Calendar Days & Events]
    AvailableThemes[Available Themes]
    EventLog[Cancellation Logs / Reasons]
    Goals[User Goals / Target Hours]
    MinMax[Task Min/Max Time Settings]
  end

  subgraph Zustand / Local UI State
    ActiveTheme[Active Theme]
    DragEvent[Drag & Drop Event ID]
    HoverDay[Hovered Day ID]
    SelectedDay[Selected Day ID]
    WaterFill[WaterFill Animation State]
    GoalProgress[Goal Progress Bars]
    ModalState[Open Modals]
    MinMaxUI[Min/Max Time UI State]
  end

  subgraph Shared / Components
    UI[Shared UI Components]
    D3[Calendar Grid & Animations (D3.js)]
  end

  %% Connections
  User -->|Apollo| UI
  Calendar -->|Apollo| D3
  AvailableThemes -->|Apollo| ActiveTheme
  ActiveTheme -->|Zustand| UI
  DragEvent -->|Zustand| D3
  HoverDay -->|Zustand| D3
  SelectedDay -->|Zustand| D3
  WaterFill -->|Zustand| D3
  GoalProgress -->|Zustand| UI
  ModalState -->|Zustand| UI
  EventLog -->|Apollo| UI
  Goals -->|Apollo| GoalProgress
  MinMax -->|Apollo| MinMaxUI
  MinMaxUI -->|Zustand| UI
  MinMaxUI -->|Zustand| D3
```

## FEATURE

1. Drag & Drop графика между днями.
   Перетаскивание событий и задач между днями

2. Локальный UI state через Zustand

3. Сохранение изменений на сервер через Apollo

4. Добавление событий в сетку через JSON

5. Импорт JSON → создание событий

6. Локальная валидация + Apollo mutation для сервера

7. Отслеживание реального времени работы пользователя

8. Тайм-трекинг активности (игры, ТВ, прокрастинация)

9. Данные для WaterFill и аналитики

10. Частично хранится на клиенте (live), серверный апдейт через Apollo

11. Анимация «загруженности воды» для каждого дня

12. D3.js визуализация

13. Данные берутся из day.activity

14. Тема влияет на цвета и эффекты через ThemeProvider

15. Прокачка профиля

16. Каждое выполненное событие даёт очки: дисциплина, сила, выносливость UI: прогресс-бары, уровень

17. Состояние на сервере через Apollo + локальный Zustand для отображения

18. Постепенное увеличение целей. Пользователь ставит цель (например, 2 часа чтения).
    Прогресс увеличивается постепенно (минимальный таймер + +1% в день)

19. Локальный Zustand для анимации прогресса

20. Меняемые UI темы / скины. ThemeProvider + dynamic import
    Темы: base, riot, cyberpunk, anime и т.д.

21. Активная тема хранится в Zustand и сервере (для persist)

22. Отмена задач с записью причины.
    Текст / голосовая запись. Повышает осознанность пользователя

23. Лог событий через Apollo

24. Мин/Макс время для задач (новая фича)
    Можно задавать минимальное и максимальное время на задачу

25. Визуально отображается на календаре / прогресс-баре

26. Локальный UI state в Zustand + хранение на сервере через Apollo

27. Используется для постепенного увеличения цели без перегрузки пользователя

28. Награды / ачивки:
    Система достижений: «7 дней подряд без прокрастинации», «Первая выполненная цель»

29. Прокачка профиля визуализируется через UI (Добавлять персанажей в разных позах одеждах и т.д)

30. Социальный компонент:
    Можно делиться прогрессом или задачами с друзьями

31. Легкий рейтинг или сравнение очков дисциплины

32. Рекомендации по тайм-менеджменту
    На основе данных о реальном времени работы пользователь получает советы
    Например, «Сегодня оптимально читать 45 минут, потом 15 минут отдых»

33. История прогресса (Я бы добавил реальнную картину действий.
    Будучи прокастинатором часто укоряешь себя в том что ты что-то не сделал, хотя ты старался на протяжении всей недели и может отдахнуть.
    Как бы сохраняя баланс [ожиданния / дисциплина])
34. Графики и анимации по неделям / месяцам

35. Использует D3.js + темы

36. Мгновенные уведомления / напоминания

37. Локальные уведомления через Zustand

38. Серверные пуши через Apollo subscriptions

39. Интерактивная визуализация прогресса

40. WaterFill + анимации мини/макс времени
