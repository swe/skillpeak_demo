# Настройка отправки email через Resend.com

## Обзор
Форма "Contact Us" настроена для отправки email на `admin@skillpeak.ca` через сервис Resend.com.

## Настройка

### 1. Получение API ключа Resend
1. Зарегистрируйтесь на [resend.com](https://resend.com)
2. Перейдите в раздел [API Keys](https://resend.com/api-keys)
3. Создайте новый API ключ
4. Скопируйте ключ

### 2. Настройка переменных окружения

#### Для локальной разработки:
Создайте файл `.env.local` в корне проекта:
```bash
RESEND_API_KEY=your_resend_api_key_here
```

#### Для продакшена на Vercel:
1. Перейдите в настройки проекта на [vercel.com](https://vercel.com)
2. Откройте раздел "Environment Variables"
3. Добавьте переменную:
   - **Name**: `RESEND_API_KEY`
   - **Value**: ваш API ключ от Resend
   - **Environment**: Production, Preview, Development

### 3. Настройка домена (для продакшена)
1. В панели Resend добавьте ваш домен (например, `skillpeak.com`)
2. Настройте DNS записи согласно инструкциям Resend
3. Обновите `from` адрес в `/app/api/contact/route.ts`:
   ```typescript
   from: 'SkillPeak Contact Form <noreply@skillpeak.com>',
   ```

## Структура email
Отправляемые email содержат:
- **Тема**: "Новое сообщение от [Имя] [Фамилия]"
- **Получатель**: admin@skillpeak.ca
- **Отправитель**: noreply@skillpeak.com (или ваш настроенный домен)
- **Содержание**: HTML и текстовая версии с информацией о пользователе и сообщении

## Тестирование
1. Запустите проект локально: `npm run dev`
2. Перейдите на страницу `/contact`
3. Заполните форму и отправьте тестовое сообщение
4. Проверьте, что email приходит на admin@skillpeak.ca

## Безопасность
- API ключ хранится в переменных окружения
- Валидация всех полей формы
- Защита от спама через валидацию email
- Обработка ошибок с понятными сообщениями для пользователя

## Troubleshooting
- Убедитесь, что API ключ корректный
- Проверьте настройки DNS для домена
- Проверьте логи в Vercel Functions для отладки
- Убедитесь, что домен верифицирован в Resend
