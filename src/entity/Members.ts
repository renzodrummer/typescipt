import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Members {
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fname: string;

  @Column()
  mname: string;

  @Column()
  lname: string;

  @Column()
  dateofbirth: string;

  @Column()
  age: string;

  @Column()
  placeofbirth: string;

  @Column()
  tin: string;

  @Column()
  statuss: string;

  @Column()
  gender: string;

  @Column()
  citizenship: string;

  @Column()
  contactno: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  residence: string;

  @Column()
  provincial: string;

  @Column()
  occupation: string;

  @Column()
  employer: string;

  @Column()
  spouse: string;

  @Column()
  father: string;

  @Column()
  mother: string;

  @Column()
  subscription: string;

  @Column()
  role: string;

  @Column()
  file: string;

  @Column()
  registration: string;

  @Column()
  date_registered: string;

  @Column()
  date_approved: string;

  @Column()
  approvedby: string;

  @Column()
  coopID: number;
}