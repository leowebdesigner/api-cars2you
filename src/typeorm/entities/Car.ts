import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';

@Entity({ name: 'cars' })
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  marca: string;

  @Column({ nullable: false })
  modelo: string;

  @Column({ nullable: true })
  ano: number;

  @Column({ nullable: true })
  peso: number;

  @Column({ nullable: true })
  cor: string;

  @Column({ nullable: true })
  status: number;

  @Column({
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @ManyToOne(() => Category, (category) => category.cars, {
    onDelete: 'SET NULL',
  })
  category: Category;
}
