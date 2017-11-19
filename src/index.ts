import { app } from './config/express';
import { userRouter } from './user/router';
import { inicializeDB } from './config/mongo';
import { bookRouter } from './book/router';
import * as env from './config/environments'

app.listen(env.PORT, () => {
    console.info(`Application running at port ${env.PORT}.`);
});

app.use('/user', userRouter);
app.use('/book', bookRouter);

inicializeDB();