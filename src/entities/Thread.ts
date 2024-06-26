import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: "threads"})
export class Thread {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column({nullable: true})
    image: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_ad: Date;

}