import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCommentsTable1722830456046 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'comments',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'content',
                        type: 'text',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP',
                    },
                    {
                        name: 'user_id',
                        type: 'int',
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['user_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'users',
                        onDelete: 'CASCADE',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments');
    }
}
