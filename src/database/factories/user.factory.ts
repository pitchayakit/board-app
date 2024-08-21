import { setSeederFactory } from 'typeorm-extension';
import { User } from '../../user/user.entity';
import { faker } from '@faker-js/faker';

setSeederFactory(User, () => {
    const user = new User();
    user.username = faker.internet.userName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    return user;
});
