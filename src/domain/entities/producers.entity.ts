import { BeforeInsert, Column, Entity, OneToMany, Unique } from 'typeorm';
import { BaseEntity } from './base.entity';
import { CultivationEntity } from './cultivation.entity';

@Entity({ name: 'producers' })
@Unique(['document'])
@Unique(['nameProducer', 'document'])
export class ProducersEntity extends BaseEntity {
  @Column({ name: 'name_producer', type: 'varchar' })
  nameProducer: string;

  @Column({ type: 'varchar' })
  document: string;

  @Column({ name: 'type_document', type: 'varchar', default: 'CPF' })
  typeDocument: string;

  @Column({ name: 'name_ranch', type: 'varchar' })
  nameRanch: string;

  @Column({ type: 'varchar' })
  county: string;

  @Column({ type: 'varchar', length: 2 })
  state: string;

  @Column({ name: 'total_hectare_area', type: 'integer' })
  totalHectareArea: number;

  @Column({ name: 'total_arable_area', type: 'integer' })
  totalArableArea: number;

  @Column({ name: 'total_vegetation_area', type: 'integer' })
  totalVegetationArea: number;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @OneToMany(() => CultivationEntity, (e) => e.producer)
  cultivation: CultivationEntity[];

  @BeforeInsert()
  transformTypeDocument() {
    this.typeDocument = this.document.length < 12 ? 'CPF' : 'CNPJ';
  }
}

export type ICreateProducer = Omit<
  ProducersEntity,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'isActive'
  | 'typeDocument'
  | 'transformTypeDocument'
  | 'cultivation'
>;
export type IUpdateProducer = Omit<
  ProducersEntity,
  | 'id'
  | 'createdAt'
  | 'updatedAt'
  | 'deletedAt'
  | 'document'
  | 'typeDocument'
  | 'transformTypeDocument'
  | 'cultivation'
>;

export type IViewProducer = Omit<
  ProducersEntity,
  'transformTypeDocument' | 'deletedAt'
>;
