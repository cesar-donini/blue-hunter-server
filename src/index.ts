import { app } from './config/express';
import { userRouter } from './user/router';
import { inicializeDB } from './mongo/config';
import { authorRouter } from './author/router';

app.listen(3000, () => {
    console.info("Application running at port 3000.");
});

app.use(userRouter);
app.use(authorRouter);

inicializeDB();