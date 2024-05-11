import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ProducersEntity } from './producers.entity';

@Entity({ name: 'cultivations' })
export class CultivationEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ name: 'area_arable', type: 'integer' })
  areaArable: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @ManyToOne(() => ProducersEntity, (e) => e.cultivations)
  @JoinColumn({ name: 'producer_id', foreignKeyConstraintName: 'id' })
  producer: ProducersEntity;
}

export type ICreateCultivation = Omit<
  CultivationEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'producer' | 'isActive'
>;

export type IUpdateCultivation = Omit<
  CultivationEntity,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt' | 'producer'
>;

export type IViewCultivation = CultivationEntity;
