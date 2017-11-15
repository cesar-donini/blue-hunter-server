import { app } from './config/express';
import { userRouter } from './user/router';

app.listen(3000, () => {
    console.info("Application running at port 3000.");
});

app.use(userRouter);