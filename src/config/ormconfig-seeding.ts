import { DataSource } from 'typeorm';
import { runSeeders } from 'typeorm-extension';
import { User } from '../user/user.entity';
import { Comment } from '../comment/comment.entity/comment.entity';

const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'password',
    database: 'boilerplate',
    entities: [User, Comment],
    synchronize: true,
});

dataSource
    .initialize()
    .then(async () => {
        await runSeeders(dataSource);
    })
    .catch((error) => console.log(error));
